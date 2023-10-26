"use client"

import React, { useState, useEffect } from 'react';

const images = [
    '/images/4.webp',
    '/images/3.webp',
    '/images/1.webp',
];

function AutoImageSlider() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [textArray, setText] = [
        "Nouvelles solutions biostimulantes",
        "loazpidjjjjjj",
        "huouihiNouvelles solutions biostimulantes"
    ]

    // Function to advance to the next image
    const goToNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Automatically switch to the next image every 5 seconds
    useEffect(() => {
        const interval = setInterval(goToNextImage, 6000);
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
            <h1 className='absolute text-5xl font-bold text-white max-w-lg text-center'>
                Nouvelles solutions biostimulantes
            </h1>
        </div>
    );
}

export default AutoImageSlider;
