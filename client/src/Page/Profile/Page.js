import React from 'react'
import { FaRegEdit } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";

function Profile() {
  return (
    <div className='flex justify-center items-center'> 
      <div className='h-fit w-3/6  p-16 flex gap-1 flex-col justify-center items-center bg-gray-100 mt-7 ml-7 pt-5 rounded-2xl'>
        <div className='w-full flex justify-center items-center mb-3'>
          <img className='w-36 h-36 rounded-full' src="https://res.cloudinary.com/dvvusmrli/image/upload/v1719642058/aat91d5ww3eygxryzyiz.png" alt="" />
        </div>
        <div className='h-18 w-full flex justify-center items-center text-3xl'>
          <label className="profile-name">Vaghela Rutvik</label>
        </div>
        <div className="h-10 w-full flex justify-center items-center text-lg">
          <label className="profile-emailphone">vaghelarutvik@gmail.com</label>
        </div>
        <div className="h-10 w-full flex justify-center items-center text-lg">
          <label className="profile-emailphone">+91 0123456789</label>
        </div>
        <button className="h-20 w-3/5 flex justify-center items-center text-2xl mt-5 bg-gray-200 rounded-lg">
          <label className="profile-function flex gap-3"><FaHistory /> <span>Order History</span></label>
        </button>
        <button className="h-20 w-3/5 flex justify-center items-center text-2xl mt-5 bg-gray-200 rounded-lg">
          <label className="profile-function  flex justify-center items-center gap-3"><FaRegEdit /><span> Edit Profile</span></label>
        </button>
        <button className="mt-5 text-lg flex justify-center items-center gap-3"><FaSignOutAlt /><span>Sign out</span></button>
      </div>
    </div>
  )
}

export default Profile
