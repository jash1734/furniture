import React from 'react'
import { FaTruck } from "react-icons/fa";
import { FaShopify } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { BiTransfer } from "react-icons/bi";
import { CiStar } from "react-icons/ci";
import './App.css';
import { useState } from 'react';
import Header from './Header';



function Home() {

    const [selected, setSelected] = useState('product');

    const handleClick = (id) => {
        setSelected(id);
    };


    return (
        <div>
            <Header/>
            <div className='h-fit lg:flex bg-gray-300'>
                <div className=' w-full h-fit flex flex-col'>
                    <div className='p-3 m-4 flex flex-col gap-2 '>
                        <h1 className='font-semibold text-2xl lg:text-4xl '>Why Choose Us</h1>
                        <p className='text-justify opacity-80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor culpa ratione distinctio tenetur quae! Porro blanditiis explicabo quam atque dolorum?</p>
                        <div>
                            <div className='flex flex-col justify-center items-center lg:flex-row lg:ml-20 lg:mr-20'>

                                <div className='p-2 flex flex-col w-full lg:mx-2'>
                                    <span className=''><FaTruck className='w-7 h-7' /></span>
                                    <h1 className='font-semibold text-lg opacity-80'>Fast & free shoping</h1>
                                    <p className='text-justify opacity-80 text-slate-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, officiis maiores omnis quisquam quo deserunt?</p>
                                </div>
                                <div className='p-2 flex flex-col w-full lg:mx-2'>
                                    <span className=''><FaShopify className='w-7 h-7' /></span>
                                    <h1 className='font-semibold text-lg opacity-80'>Easy to Shop</h1>
                                    <p className='text-justify opacity-80 text-slate-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, officiis maiores omnis quisquam quo deserunt?</p>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center  lg:flex-row lg:ml-20 lg:mr-20'>

                                <div className='p-2 flex flex-col w-full lg:mx-2'>
                                    <span className=''><IoMdTime className='w-7 h-7' /></span>
                                    <h1 className='font-semibold text-lg opacity-80'>24/7 Support</h1>
                                    <p className='text-justify opacity-80 text-slate-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, officiis maiores omnis quisquam quo deserunt?</p>
                                </div>
                                <div className='p-2 flex flex-col  w-full lg:mx-2'>
                                    <span className=''><BiTransfer className='w-7 h-7' /></span>
                                    <h1 className='font-semibold text-lg opacity-80 '>Transfer product</h1>
                                    <p className='text-justify opacity-80 text-slate-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, officiis maiores omnis quisquam quo deserunt?</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='w-full h-full flex flex-col justify-center items-center'>
                    <div className='h-fit w-full m-2 lg:m-4 p-10 flex justify-center items-center rounded-xl'>
                        <img className='w-96 h-[450px]  rounded-xl' src="https://res.cloudinary.com/dvvusmrli/image/upload/v1719642058/aat91d5ww3eygxryzyiz.png" alt="" />

                    </div>
                </div>
            </div>

            <div className=' h-fit p-5 m-3 lg:flex bg-white flex flex-col gap-4'>
                <div>


                    <div className='flex flex-col justify-center items-center gap-2 lg:gap-4'>
                        <h1 className='font-semibold text-3xl lg:text-4xl opacity-80 '>Our Product</h1>
                        <div className='w-32 lg:w-36 border border-black flex justify-center items-center'></div>
                    </div>
                    <div className=''>
                        <div className='flex justify-between items-center'>
                            <div className='w-72 flex gap-3 lg:gap-6 lg:justify-start items-center text-lg lg:text-xl'>
                                <a
                                    href="#"
                                    className={selected === 'product' ? 'selected' : ''}
                                    onClick={() => handleClick('product')}
                                >
                                    Product
                                </a>
                                <a
                                    href="#"
                                    className={selected === 'chair' ? 'selected' : ''}
                                    onClick={() => handleClick('chair')}
                                >
                                    Chair
                                </a>
                                <a
                                    href="#"
                                    className={selected === 'sofa' ? 'selected' : ''}
                                    onClick={() => handleClick('sofa')}
                                >
                                    Sofa
                                </a>
                                <a
                                    href="#"
                                    className={selected === 'table' ? 'selected' : ''}
                                    onClick={() => handleClick('table')}
                                >
                                    Table
                                </a>
                            </div>
                            <div className='lg:mr-5'>
                                <button type="button" class="text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-6 py-1.5 text-center inline-flex items-center  me-2 mb-2">
                                    filter
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex lg:flex-wrap gap-3 justify-center items-center'>

                    <div className='w-fit h-fit flex flex-col border rounded-t-xl'>
                        <div>
                            <img className='w-80 h-[400px] rounded-xl' src="https://res.cloudinary.com/dvvusmrli/image/upload/v1719642058/aat91d5ww3eygxryzyiz.png" alt="" />
                        </div>

                        <div className='w-full h-fit flex m-0 gap-16 p-2 items-center '>
                            <div className='w-full h-fit flex flex-col justify-center items-start'>
                                <h1>Sofa</h1>
                                <span>12000.00</span>
                            </div>
                            <div className='w-full h-fit flex'>
                                <span><CiStar className='w-7 h-7 fill-yellow-600' /></span>
                                <span><CiStar className='w-7 h-7 fill-yellow-600' /></span>
                                <span><CiStar className='w-7 h-7 fill-yellow-600' /></span>
                                <span><CiStar className='w-7 h-7 fill-yellow-600' /></span>
                                <span><CiStar className='w-7 h-7 fill-yellow-600' /></span>
                            </div>
                        </div>

                    </div>


                    {/* <div className='w-fit h-fit flex flex-col border rounded-t-xl'>
                        <div>
                            <img className='w-80 h-[400px] rounded-xl' src="https://res.cloudinary.com/dvvusmrli/image/upload/v1719642058/aat91d5ww3eygxryzyiz.png" alt="" />
                        </div>

                        <div className='w-full h-fit flex m-0 gap-16 p-2 items-center '>
                            <div className='w-full h-fit flex flex-col justify-center items-start'>
                                <h1>Sofa</h1>
                                <span>12000.00</span>
                            </div>
                            <div className='w-full h-fit flex'>
                                <span><CiStar className='w-7 h-7 fill-yellow-600' /></span>
                                <span><CiStar className='w-7 h-7 fill-yellow-600' /></span>
                                <span><CiStar className='w-7 h-7 fill-yellow-600' /></span>
                                <span><CiStar className='w-7 h-7 fill-yellow-600' /></span>
                                <span><CiStar className='w-7 h-7 fill-yellow-600' /></span>
                            </div>
                        </div>

                    </div>

                    <div className='w-fit h-fit flex flex-col border rounded-t-xl'>
                        <div>
                            <img className='w-80 h-[400px] rounded-xl' src="https://res.cloudinary.com/dvvusmrli/image/upload/v1719642058/aat91d5ww3eygxryzyiz.png" alt="" />
                        </div>

                        <div className='w-full h-fit flex m-0 gap-16 p-2 items-center '>
                            <div className='w-full h-fit flex flex-col justify-center items-start'>
                                <h1>Sofa</h1>
                                <span>12000.00</span>
                            </div>
                            <div className='w-full h-fit flex'>
                                <span><CiStar className='w-7 h-7 fill-yellow-600' /></span>
                                <span><CiStar className='w-7 h-7 fill-yellow-600' /></span>
                                <span><CiStar className='w-7 h-7 fill-yellow-600' /></span>
                                <span><CiStar className='w-7 h-7 fill-yellow-600' /></span>
                                <span><CiStar className='w-7 h-7 fill-yellow-600' /></span>
                            </div>
                        </div>

                    </div>


                    <div className='w-fit h-fit flex flex-col border rounded-t-xl'>
                        <div>
                            <img className='w-80 h-[400px] rounded-xl' src="https://res.cloudinary.com/dvvusmrli/image/upload/v1719642058/aat91d5ww3eygxryzyiz.png" alt="" />
                        </div>

                        <div className='w-full h-fit flex m-0 gap-16 p-2 items-center '>
                            <div className='w-full h-fit flex flex-col justify-center items-start'>
                                <h1>Sofa</h1>
                                <span>12000.00</span>
                            </div>
                            <div className='w-full h-fit flex'>
                                <span><CiStar className='w-7 h-7 fill-yellow-600' /></span>
                                <span><CiStar className='w-7 h-7 fill-yellow-600' /></span>
                                <span><CiStar className='w-7 h-7 fill-yellow-600' /></span>
                                <span><CiStar className='w-7 h-7 fill-yellow-600' /></span>
                                <span><CiStar className='w-7 h-7 fill-yellow-600' /></span>
                            </div>
                        </div>

                    </div> */}
                </div>
                <div className='flex justify-center items-center mt-6'>
                    <button type="button" class="text-black border border-black bg-white   font-medium rounded-lg text-sm px-6 py-1.5 text-center inline-flex items-center  me-2 mb-2  hover:bg-slate-200">
                        Load More
                    </button>
                </div>
            </div>

            <div className=' mx-6 lg:mx-16'>
                <div className='h-fit flex flex-col lg:flex-row justify-center items-center lg:gap-16 p-4 lg:p-12 my-4 bg-gray-300'>
                    <div>
                        <img className='w-96 h-64' src="https://res.cloudinary.com/dvvusmrli/image/upload/v1719642058/aat91d5ww3eygxryzyiz.png" alt="" />

                    </div>
                    <div className='w-48 lg:w-0 lg:h-24 border border-black my-6 lg:my-24'></div>
                    <div>
                        <img className='w-96 h-64' src="https://res.cloudinary.com/dvvusmrli/image/upload/v1719642058/aat91d5ww3eygxryzyiz.png" alt="" />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home