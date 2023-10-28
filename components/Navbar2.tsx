"use client"

import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'
import { LiaTimesSolid } from "react-icons/lia"

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <nav className="bg-lime-400/20 pr-16 ease-in-out duration-200 pl-10 py-7 fixed top-0 w-full backdrop-blur-xl flex items-center justify-center flex-row  z-20">
                <div className='w-full h-full absolute top-0 right-0 -z-10 group overflow-hidden'>
                    <div className='effect1 absolute ease-in-out duration-300 delay-50  w-1 h-1 top-0 left-0 rounded-full bg-lime-400/60 backdrop-blur-xl ' />
                    <div className='effect2 w-1 h-1 top-20 left-0 delay-100 rounded-full bg-lime-400/60 backdrop-blur-xl absolute ease-in-out duration-300 delay-50' />
                </div>

                <div className="text-black text-2xl flex-1">
                    <img src='/images/logo.webp' className='w-28' />
                </div>
                <button
                    onClick={() => setOpen(!open)}
                    className="text-white focus:outline-none p-2"
                >
                    {!open && (

                        <i className="group fas fa-bars flex flex-row items-center justify-center gap-2">
                            <FaBars size={23} className="w-10 group-hover:w-0 ease-in-out duration-200 overflow-hidden text-white" />
                            <h1 className='w-0 overflow-hidden ease-in-out duration-200 bg-lime-400/40 text-white group-hover:w-24 py-2 hover:bg-lime-400/60'>Menu</h1>
                        </i>
                    )
                    }
                </button>

            </nav >
            <div className={`h-[100svh] ${open ? "w-screen opacity-100" : "w-0 opacity-0"} top-0 left-0  ease-in duration-300 fixed bg-[#E9FFC2] flex items-center justify-center gap-4 z-50  overflow-hidden`}>
                <button
                    onClick={() => setOpen(!open)}>
                    <i className="group fas fa-bars flex flex-row items-center justify-center gap-2">
                        <LiaTimesSolid size={30} className="w-10 group-hover:w-0 ease-in-out duration-200 overflow-hidden" />
                        <h1 className='w-0 overflow-hidden ease-in-out duration-200 bg-lime-400/40 text-white group-hover:w-24 hover:bg-lime-400/60 py-2'>Close</h1>
                    </i>
                </button>
                <div className='space-y-3'>
                    <a
                        className={` opacity-70 hover:opacity-100 ease-in-out text-black group p-2 text-2xl relative flex flex-col`}

                        href="#" >
                        <div className=' z-0 rounded-full h-0 w-0 group-hover:w-14  group-hover:h-14 ease-in-out duration-200 bg-white absolute -top-2 -left-3 ' />
                        <div className={`${!open ? "w-0" : "w-40"} delay-500  group-hover:tracking-widest ease-in-out duration-500 z-10 font-medium overflow-hidden`}>
                            Home
                        </div>

                    </a>
                    <a
                        className={` opacity-70 hover:opacity-100 ease-in-out text-black group p-2 text-2xl relative flex flex-col`}

                        href="#" >
                        <div className=' z-0 rounded-full h-0 w-0 group-hover:w-14  group-hover:h-14 ease-in-out duration-200 bg-white absolute -top-2 -left-3 ' />
                        <div className={`${!open ? "w-0" : "w-40"} delay-500 group-hover:tracking-widest ease-in-out duration-500 z-10 font-medium overflow-hidden`}>
                            About
                        </div>

                    </a>
                    <a
                        className={` opacity-70 hover:opacity-100 ease-in-out text-black group p-2 text-2xl relative flex flex-col`}

                        href="#" >
                        <div className=' z-0 rounded-full h-0 w-0 group-hover:w-14  group-hover:h-14 ease-in-out duration-200 bg-white absolute -top-2 -left-3 ' />
                        <div className={`${!open ? "w-0" : "w-40"} delay-500 group-hover:tracking-widest ease-in-out duration-500 z-10 font-medium overflow-hidden`}>
                            Services
                        </div>

                    </a>
                    <a
                        className={` opacity-70 hover:opacity-100 ease-in-out text-black group p-2 text-2xl relative flex flex-col`}

                        href="#" >
                        <div className=' z-0 rounded-full h-0 w-0 group-hover:w-14  group-hover:h-14 ease-in-out duration-200 bg-white absolute -top-2 -left-3 ' />
                        <div className={`${!open ? "w-0" : "w-40"} delay-500 group-hover:tracking-widest ease-in-out duration-500 z-10 font-medium overflow-hidden`}>
                            Contact
                        </div>

                    </a>
                </div>
            </div>
        </>
    );
};

export default Navbar;
