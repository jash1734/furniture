import React, { useState } from "react";
import axios from "axios";
import ImageUploading from "react-images-uploading";
import { RxCross2 } from "react-icons/rx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [images, setImages] = useState([]);
  const [uploadStatus, setUploadStatus] = useState("");
  const [currentImage, setCurrentImage] = useState();

  const submitImages = () => {
    setUploadStatus("Uploading...");
    images.forEach((image, index) => {
      const data = new FormData();
      data.append("file", image.file || image.data_url);
      data.append("upload_preset", "makwanaApp");
      data.append("cloud_name", "dvvusmrli");

      axios
        .post("https://api.cloudinary.com/v1_1/dvvusmrli/image/upload", data)
        .then((response) => {
          console.log(response.data);
          if (index === images.length - 1) {
            setUploadStatus("Upload successful!");
          }
        })
        .catch((error) => {
          console.error(error);
          setUploadStatus("Error uploading images. Please try again.");
        });
    });
  };

  const onChange = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex);
    setCurrentImage(imageList[0]?.data_url);
    setImages(imageList);
  };

  const settings = {
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: false,
  };

  return (
    <>
      <div className="App">
        <ImageUploading
          multiple
          value={images}
          onChange={onChange}
          dataURLKey="data_url"
        >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            <div className="border border-black w-fit h-fit p-4 flex flex-col">
              <h2 className="font-semibold text-lg">Upload Img</h2>
              <button
                style={isDragging ? { color: "red" } : undefined}
                onClick={onImageUpload}
                className={`w-72 border h-80 overflow-hidden rounded-md ${
                  currentImage ? "" : "border-black"
                }`}
                {...dragProps}
              >
                {imageList.length === 0 ? (
                  <>Click or Drop here</>
                ) : (
                  <img
                    src={currentImage}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                )}
              </button>
              &nbsp;
              <div className="w-96">
                {imageList.length > 4 ? (
                  <Slider {...settings}>
                    {imageList.map((image, index) => (
                      <div
                        key={index}
                        className="relative w-full h-full px-1 my-2"
                      >
                        <img
                          src={image["data_url"]}
                          alt=""
                          className=" w-28 h-28 rounded-md object-cover  border border-black "
                          onClick={() => setCurrentImage(image.data_url)}
                        />
                        <button
                          onClick={() => onImageRemove(index)}
                          className="absolute right-1 top-1  bg-red-500 rounded-full"
                        >
                          <RxCross2 color="white" />
                        </button>
                      </div>
                    ))}
                  </Slider>
                ) : (
                  <div className="flex flex-wrap">
                    {imageList.map((image, index) => (
                      <div
                        key={index}
                        className="relative w-1/4 h-28 px-1 my-2"
                      >
                        <img
                          src={image["data_url"]}
                          alt=""
                          className="w-full h-full rounded-md object-cover border border-black"
                          onClick={() => setCurrentImage(image.data_url)}
                        />
                        <button
                          onClick={() => onImageRemove(index)}
                          className="absolute right-1 top-1 bg-red-500 rounded-full"
                        >
                          <RxCross2 color="white" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </ImageUploading>
        <button onClick={submitImages}>Submit Images</button>
        {uploadStatus && <p>{uploadStatus}</p>}
      </div>
    </>
  );
}

export default App;
