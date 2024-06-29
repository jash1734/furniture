import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [image, setImage] = useState("");

  const submitImage = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "makwanaApp");
    data.append("cloud_name", "dvvusmrli");

    fetch("https://api.cloudinary.com/v1_1/dvvusmrli/image/upload", {
      method: "post",
      body: data
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
  }

  return (
    <>
      <div>
        <div>
          <input type='file' onChange={(e) => setImage(e.target.files[0])} />
          <button onClick={submitImage}>Upload</button>
        </div>
      </div>
    </>
  );
}

export default App;
