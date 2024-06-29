import React, { useState } from "react";
import axios from "axios";
import ProductImage from "./ProductImage";

const Form = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rent, setRent] = useState([]);
  const [rentPrice, setRentPrice] = useState();
  const [keywords, setKeywords] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [imageURL,setImageUrl]=useState([])
  const rentOptions = [1, 3, 6, 9, 12];


  const [dataSubmit,setDataSubmit]=useState(false)

  const handleImageUpload = (images, setUploadStatus, setUploadedUrls) => {
    setUploadStatus(false);
    let urls = [];

    Promise.all(
      images.map((image, index) => {
        const data = new FormData();
        data.append("file", image.file || image.data_url);
        data.append("upload_preset", "makwanaApp"); 
        data.append("cloud_name", "dvvusmrli"); 

        return axios
          .post(
            "https://api.cloudinary.com/v1_1/dvvusmrli/image/upload",
            data
          )
          .then((response) => {
            console.log(response.data);
            urls.push(response.data.secure_url);
          })
          .catch((error) => {
            console.error(error);
            setUploadStatus("Error uploading images. Please try again."); 
          });
      })
    )
    .then(() => {
      setUploadStatus(true); 
      setImageUrl(urls)
      setUploadedUrls(urls); 
      setDataSubmit(true)
    })
    .catch((error) => {
      console.error(error);
      setUploadStatus("Error uploading images. Please try again."); 
    });
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddKeyword = () => {
    if (inputValue.trim() !== "") {
      setKeywords([...keywords, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddKeyword();
    }
  };

  const handleRemoveKeyword = (keyword) => {
    const updatedKeywords = keywords.filter((kw) => kw !== keyword);
    setKeywords(updatedKeywords);
  };
 const handleSubmit=()=>{
  if(dataSubmit){

    console.log("click")
    const detail={
      title:title,
      description:description,
      rent:rent,
      rentprice:rentPrice,
      keyword:keywords,
      image:imageURL,
    }
    console.log(detail)
  }
 }
 const handleRentClick = (option) => {
  if (rent.includes(option)) {
    setRent(rent.filter((item) => item !== option));
  } else {
    setRent([...rent, option]);
  }
};
  return (
    <div className=" bg-white w-10/12 h-fit p-4 border border-black mx-auto">
      <h2>Add New Product</h2>
      <div className=" flex justify-between gap-4">
        <div className=" flex flex-col w-10/12 gap-5">
          <div className=" bg-gray-100 py-6 px-5 rounded-xl flex flex-col gap-4">
            <h3 className=" text-2xl font-semibold">General Information</h3>
            <div className=" flex flex-col gap-2">
              <p className=" text-xl font-medium">Name Product </p>
              <input
                type="text"
                className=" px-6 w-full py-3 rounded-lg bg-gray-200 focus:outline-none"
                onChange={(e)=>setTitle(e.target.value)}
              />
            </div>
            <div className=" flex flex-col gap-2">
              <p className=" text-xl font-medium">Description Product </p>
              <textarea className=" h-32 px-6 w-full py-3 rounded-lg bg-gray-200 focus:outline-none"
              onChange={(e)=>setDescription(e.target.value)}></textarea>
            </div>

            <div className=" flex gap-5 w-full">
              <div className=" flex flex-col gap-2">
                <p className=" text-xl font-medium">Rent Time(Month)</p>
                <div className="flex gap-2">
                  {rentOptions.map((option) => (
                    <button
                      key={option}
                      className={`w-10 h-10 bg-gray-200 ${rent.includes(option) ? "bg-blue-500 text-white" : ""}`}
                        onClick={() => handleRentClick(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
              <div className=" flex flex-col gap-2 w-full">
                <p className=" text-xl font-medium">Per Month Rent ₹</p>
                <input
                  type="text"
                  className=" px-6 w-full py-3 rounded-lg bg-gray-200 focus:outline-none"
                  onChange={(e)=>setRentPrice(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className=" bg-gray-100 py-6 px-5 rounded-xl flex flex-col gap-4">
            <h3 className=" text-2xl font-semibold">Product Category</h3>
            <div className="flex flex-wrap w-10/12 h-fit border border-black px-3 py-5 rounded-xl gap-3">
              <div className="flex flex-wrap gap-2 ">
                {keywords.map((keyword, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 py-1 px-3 rounded-full flex justify-between gap-2 items-center"
                  >
                    <p>{keyword}</p>
                    <button
                      onClick={() => handleRemoveKeyword(keyword)}
                      className=" hover:bg-gray-400 rounded-full px-2 py-1 text-xs"
                    >
                      &times;
                    </button>
                  </span>
                ))}
              </div>
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                placeholder="Enter a keyword"
                className="px-3 py-1 rounded-md ml-2 bg-transparent focus:outline-none"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <ProductImage handleImageUpload={handleImageUpload} />
          <button className={`bg-blue-500 py-4 rounded-xl ${dataSubmit ? "cursor-pointer": "cursor-wait"}`} onClick={()=>handleSubmit()} >Submit </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
