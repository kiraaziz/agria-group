"use client"

import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-lime-100/70 pr-16 ease-in-out duration-200 pl-10 py-5 fixed top-0 w-full overflow-hidden backdrop-blur-xl flex items-center justify-center group flex-col z-40">
            <div className='w-1 h-1 top-0 left-0 rounded-full group-hover:scale-[200] bg-lime-400/60 backdrop-blur-xl absolute ease-in-out duration-300 delay-50' />
            <div className='w-1 h-1 top-20 left-0 delay-100 rounded-full group-hover:scale-[100] bg-lime-400/60 backdrop-blur-xl absolute ease-in-out duration-300 delay-50' />
            <div className="z-10 flex items-center  justify-between w-full">
                <div className="text-black text-2xl">
                    <img src='https://agria-group.com.tn/wp-content/uploads/2019/11/logo-agria-01-1.png' className='w-28' />
                </div>
                <div className="md:hidden">
                    <button
                        onClick={() => setOpen(!open)}
                        className="text-lime-500 focus:outline-none p-2"
                    >
                        {open ? (
                            <i className="fas fa-times">
                                <FaTimes />
                            </i>
                        ) : (
                            <i className="fas fa-bars">
                                <FaBars />
                            </i>
                        )}
                    </button>
                </div>
                <div className="hidden md:flex space-x-8">
                    <a href="#" className="text-black/80 text-base">
                        Acceuil
                        <div className='h-1 bg-lime-400 rounded-full w-full' />
                    </a>
                    <a href="#" className="text-black text-base link">
                        A propos
                        <div className='h-1 bg-lime-400 rounded-full w-0 ease-in-out duration-200' />
                    </a>
                    <a href="#" className="text-black text-base link">
                        Contact
                        <div className='h-1 bg-lime-400 rounded-full w-0 ease-in-out duration-200' />
                    </a>
                </div>
            </div>
            <div className={`${open ? "block" : "hidden"} z-10`}>
                <a href="#" className="block text-black hover:text-white p-2">
                    Home
                </a>
                <a href="#" className="block text-black hover:text-white p-2">
                    About
                </a>
                <a href="#" className="block text-black hover:text-white p-2">
                    Services
                </a>
                <a href="#" className="block text-black hover:text-white p-2">
                    Contact
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
