import React from 'react';
import { IoIosCall } from "react-icons/io";
import { FaSearch, FaVideo } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";
import { Outlet } from 'react-router-dom';


const Home = () => {
    return (
        <>

            <div className='flex'>
                <div className='w-[30%] h-screen bg-[#F5F7FB]'>
                    <h2 className='text-3xl font-bold pl-4'>Chats</h2>
                    <form className="flex justify-center items-center py-3 px-5">
                        <label className="input input-bordered flex items-center gap-2 w-full">

                            <input type="text" className="grow" placeholder="Username" />
                        </label>
                        <button className='btn -ml-12 bg-black bg-opacity-30 '><FaSearch></FaSearch></button>
                    </form>
                    <h2 className='text-2xl font-semibold ml-5'>Your Friends</h2>

                    <div className=' flex items-center gap-x-3 ml-5 mt-3'>
                        <img src="https://i.ibb.co/kx9700v/IMG-965883.jpg" alt="Mehedi" className='w-[40px] h-[40px] object-cover rounded-full' />
                        <h2 className='text-xl font-semibold '>Mehedi Hasan</h2>
                    </div>
                    <div className=' flex items-center gap-x-3 ml-5 mt-3'>
                        <img src="https://i.ibb.co/kx9700v/IMG-965883.jpg" alt="Mehedi" className='w-[40px] h-[40px] object-cover rounded-full' />
                        <h2 className='text-xl font-semibold '>Mehedi Hasan</h2>
                    </div>
                    <div className=' flex items-center gap-x-3 ml-5 mt-3'>
                        <img src="https://i.ibb.co/kx9700v/IMG-965883.jpg" alt="Mehedi" className='w-[40px] h-[40px] object-cover rounded-full' />
                        <h2 className='text-xl font-semibold '>Mehedi Hasan</h2>
                    </div>
                    <div className=' flex items-center gap-x-3 ml-5 mt-3'>
                        <img src="https://i.ibb.co/kx9700v/IMG-965883.jpg" alt="Mehedi" className='w-[40px] h-[40px] object-cover rounded-full' />
                        <h2 className='text-xl font-semibold '>Mehedi Hasan</h2>
                    </div>
                    <div className=' flex items-center gap-x-3 ml-5 mt-3'>
                        <img src="https://i.ibb.co/kx9700v/IMG-965883.jpg" alt="Mehedi" className='w-[40px] h-[40px] object-cover rounded-full' />
                        <h2 className='text-xl font-semibold '>Mehedi Hasan</h2>
                    </div>


                </div>


                <div className='w-[70%] p-5 bg-white '>
                    <div className='flex justify-between border-b border-gray-200 p-5'>
                        <div className='w-[60%] flex items-center gap-x-3'>
                            <img src="https://i.ibb.co/kx9700v/IMG-965883.jpg" alt="Mehedi" className='w-[50px] h-[50px] object-cover rounded-full' />
                            <h2 className='text-2xl font-semibold '>Mehedi</h2>
                        </div>
                        <div className='w-[40%] flex gap-x-6'>
                            <IoIosCall className='text-3xl ' />
                            <FaVideo className='text-3xl ' />
                            <CgProfile className='text-3xl ' />
                            <CiLogout className='text-3xl ' />

                        </div>
                    </div>
                    <div>
                        <Outlet></Outlet>
                    </div>



                </div>
            </div>
        </>
    );
};

export default Home;