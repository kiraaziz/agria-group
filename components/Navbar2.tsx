"use client"

import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'
import { LiaTimesSolid } from "react-icons/lia"

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-[#C3EDC0] pr-16 ease-in-out duration-200 pl-10 py-7 fixed top-0 w-full backdrop-blur-xl flex items-center justify-center flex-row">
            <div className="text-black text-2xl flex-1">
                <img src='https://agria-group.com.tn/wp-content/uploads/2019/11/logo-agria-01-1.png' className='w-28' />
            </div>
            <button
                onClick={() => setOpen(!open)}
                className="text-white focus:outline-none p-2"
            >
                {!open && (

                    <i className="group fas fa-bars flex flex-row items-center justify-center gap-2">
                        <FaBars className="w-10 group-hover:w-0 ease-in-out duration-200 overflow-hidden" />
                        <h1 className='w-0 overflow-hidden ease-in-out duration-200 bg-[#E9FFC2]/40 text-white group-hover:w-20 hover:bg-[#E9FFC2]/60'>Menu</h1>
                    </i>
                )
                }
            </button>
            <div className={`h-[100svh] ${open ? "w-screen opacity-100" : "w-0 opacity-0"} top-0 left-0 delay-100  ease-in duration-300 absolute bg-[#E9FFC2] flex items-center justify-center gap-4 z-50`}>
                <button
                    className=''
                    onClick={() => setOpen(!open)}>
                    <i className="group fas fa-bars flex flex-row items-center justify-center gap-2">
                        <LiaTimesSolid size={25} className="w-10 group-hover:w-0 ease-in-out duration-200 overflow-hidden" />
                        <h1 className='w-0 overflow-hidden ease-in-out duration-200 bg-[#C3EDC0]/40 text-white group-hover:w-20 hover:bg-[#C3EDC0]/60'>Close</h1>
                    </i>
                </button>
                <div className='space-y-3'>
                    <a href="#" className="opacity-70 hover:opacity-100 ease-in-out duration-200 text-black group p-2 text-2xl relative flex flex-col w-40">
                        <div className=' z-0 rounded-full h-0 w-0 group-hover:w-14  group-hover:h-14 ease-in-out duration-200 bg-white absolute -top-2 -left-3 ' />
                        <div className='group-hover:tracking-widest ease-in-out duration-200 z-10 font-medium'>
                            Home
                        </div>

                    </a>
                    <a href="#" className="opacity-70 hover:opacity-100 ease-in-out duration-200 text-black group p-2 text-2xl relative flex flex-col">
                        <div className=' z-0 rounded-full h-0 w-0 group-hover:w-14  group-hover:h-14 ease-in-out duration-200 bg-white absolute -top-2 -left-3 ' />
                        <div className='group-hover:tracking-widest ease-in-out duration-200 z-10 font-medium'>
                            About
                        </div>
                    </a>
                    <a href="#" className="opacity-70 hover:opacity-100 ease-in-out duration-200 text-black group p-2 text-2xl relative flex flex-col">
                        <div className=' z-0 rounded-full h-0 w-0 group-hover:w-14  group-hover:h-14 ease-in-out duration-200 bg-white absolute -top-2 -left-3 ' />
                        <div className='group-hover:tracking-widest ease-in-out duration-200 z-10 font-medium'>
                            Services
                        </div>
                    </a>
                    <a href="#" className="opacity-70 hover:opacity-100 ease-in-out duration-200 text-black group p-2 text-2xl relative flex flex-col">
                        <div className=' z-0 rounded-full h-0 w-0 group-hover:w-14  group-hover:h-14 ease-in-out duration-200 bg-white absolute -top-2 -left-3 ' />
                        <div className='group-hover:tracking-widest ease-in-out duration-200 z-10 font-medium'>
                            Contact
                        </div>
                    </a>
                </div>
            </div>
        </nav >
    );
};

export default Navbar;
