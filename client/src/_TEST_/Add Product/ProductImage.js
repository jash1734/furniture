import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageUploading from "react-images-uploading";
import { RiCloseLine } from "react-icons/ri"; 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductImage = ({ handleImageUpload }) => {
  const [images, setImages] = useState([]); 
  const [uploadStatus, setUploadStatus] = useState("");
  const [currentImage, setCurrentImage] = useState();
  const [uploadedUrls, setUploadedUrls] = useState([]);

  useEffect(() => {
    if (images.length > 0) {
      handleImageUpload(images, setUploadStatus, setUploadedUrls);
    }
  }, [images]);

  // Function to handle image selection and update in state
  const onChange = (imageList, addUpdateIndex) => {
    setCurrentImage(imageList[0]?.data_url); // Set the current image to display
    setImages(imageList); // Update the images state with the new list
  };

  // Settings for the Slider component
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: false,
  };

  return (
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
          <div className="w-fit h-fit p-4 flex flex-col gap-5 bg-gray-100 rounded-lg">
            <h2 className="font-semibold text-lg">Upload Img</h2>
            <button
              style={isDragging ? { color: "red" } : undefined}
              onClick={onImageUpload}
              className={`w-96 border h-80 overflow-hidden rounded-md ${
                currentImage ? "" : "border-black border-dotted"
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
              {/* Conditionally render Slider or grid based on imageList length */}
              {imageList.length > 4 ? (
                <Slider {...settings}>
                  {imageList.map((image, index) => (
                    <div key={index} className="relative w-full h-full px-1 my-2">
                      <img
                        src={image["data_url"]}
                        alt=""
                        className="w-28 h-28 rounded-md object-cover border border-black cursor-pointer"
                        onClick={() => setCurrentImage(image.data_url)}
                      />
                      <button
                        onClick={() => onImageRemove(index)}
                        className="absolute top-1 right-1 bg-red-500 rounded-full p-1 cursor-pointer"
                      >
                        <RiCloseLine color="white" size={20} />
                      </button>
                    </div>
                  ))}
                </Slider>
              ) : (
                <div className="flex flex-wrap">
                  {imageList.map((image, index) => (
                    <div key={index} className="relative w-1/4 h-28 px-1 my-2">
                      <img
                        src={image["data_url"]}
                        alt=""
                        className="w-full h-full rounded-md object-cover border border-black cursor-pointer"
                        onClick={() => setCurrentImage(image.data_url)}
                      />
                      <button
                        onClick={() => onImageRemove(index)}
                        className="absolute top-1 right-1 bg-red-500 rounded-full p-1 cursor-pointer"
                      >
                        <RiCloseLine color="white" size={20} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </ImageUploading>
    </div>
  );
}

export default ProductImage;
