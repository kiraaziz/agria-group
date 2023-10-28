"use client"

import React, { useState, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const images = [
    '/images/10.webp',
    '/images/3.webp',
    '/images/4.webp',
    '/images/9.webp',
    '/images/8.webp',
];

function AutoImageSlider() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const goToNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }

    // Function to go to the previous image
    const goToBackImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }

    useEffect(() => {
        const interval = setInterval(goToNextImage, 8000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`absolute  inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <img
                        src={image}
                        alt={`Image ${index + 1}`}
                        className="w-full h-full object-cover"
                    />
                </div>
            ))}
            <div className='flex flex-col w-full h-full absolute top-0 right-0  pt-20'>
                <div className='flex-1 w-full flex items-center justify-center flex-row'>
                    <div className='p-8 h-full flex items-center justify-center'>
                        <button onClick={goToBackImage} className="text-white hover:scale-125 opacity-70 hover:opacity-100 ease-in-out duration-200" >
                            <IoIosArrowBack size={40} />
                        </button>
                    </div>
                    <div className='flex-1 h-full gap-2 flex items-center flex-col justify-center pt-10'>
                        <h1 className='text-white font-bold text-5xl' >Agria Group</h1>
                        <div className='w-32 h-2 bg-lime-400 rounded-full'></div>
                    </div>
                    <div className='p-8 h-full flex items-center justify-center'>
                        <button onClick={goToNextImage} className="text-white hover:scale-125 opacity-70 hover:opacity-100 ease-in-out duration-200" >
                            <IoIosArrowForward size={40} />
                        </button>
                    </div>
                </div>
                <div className='w-full p-10 flex items-center justify-center gap-3'>
                    {images.map((_, index) => (
                        <button onClick={() => setCurrentImageIndex(index)} className={`hover:scale-125 w-14 h-1.5 ${index === currentImageIndex ? "bg-white" : "bg-white/50"} hover:bg-white ease-in-out duration-200 rounded-full `}>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AutoImageSlider;
