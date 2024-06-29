import React from 'react'
import { FaTruck } from "react-icons/fa";
import { FaShopify } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { BiTransfer } from "react-icons/bi";

function home() {
  return (
    <div className='w-full h-fit lg:flex'>
        <div className='bg-gray-300 w-full h-full flex flex-col'>
            <div className='p-3 m-4 flex flex-col gap-2 '>
                <h1 className='font-semibold text-2xl lg:text-4xl '>Why Choose Us</h1>
                <p className='text-justify opacity-80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor culpa ratione distinctio tenetur quae! Porro blanditiis explicabo quam atque dolorum?</p>
                <div>
                    <div className='flex flex-col justify-center items-center lg:flex-row lg:ml-20 lg:mr-20'>

                    <div className='p-2 flex flex-col w-full lg:mx-4'>
                        <span className=''><FaTruck className='w-7 h-7' /></span>
                        <h1 className='font-semibold text-lg opacity-80'>Fast & free shoping</h1>
                        <p className='text-justify opacity-80 text-slate-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, officiis maiores omnis quisquam quo deserunt?</p>
                    </div>
                    <div className='p-2 flex flex-col w-full lg:mx-4'>
                        <span className=''><FaShopify className='w-7 h-7' /></span>
                        <h1 className='font-semibold text-lgopacity-80'>Easy to Shop</h1>
                        <p className='text-justifyopacity-80 text-slate-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, officiis maiores omnis quisquam quo deserunt?</p>
                    </div>
                    </div>
                    <div className='flex flex-col justify-center items-center  lg:flex-row lg:ml-20 lg:mr-20'>

                    <div className='p-2 flex flex-col w-full lg:mx-4'>
                        <span className=''><IoMdTime className='w-7 h-7' /></span>
                        <h1 className='font-semibold text-lgopacity-80'>24/7 Support</h1>
                        <p className='text-justifyopacity-80 text-slate-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, officiis maiores omnis quisquam quo deserunt?</p>
                    </div>
                    <div className='p-2 flex flex-col  w-full lg:mx-4'>
                        <span className=''><BiTransfer className='w-7 h-7' /></span>
                        <h1 className='font-semibold text-lgopacity-80 '>Transfer product</h1>
                        <p className='text-justify opacity-80 text-slate-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, officiis maiores omnis quisquam quo deserunt?</p>
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <div  className='bg-gray-300 w-full h-full flex flex-col justify-center items-center'>
            <div className='h-fit w-full m-4 p-10'>
                <img className='w-fit h-96 border border-black' src="https://res.cloudinary.com/dvvusmrli/image/upload/v1719642058/aat91d5ww3eygxryzyiz.png" alt="" />

            </div>
        </div>
    </div>
  )
}

export default home