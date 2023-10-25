"use client"
import React, { useEffect, useState } from 'react';

const App = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById('animated-element');
            if (element && window.scrollY + window.innerHeight > element.offsetTop) {
                setAnimate(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <div style={{ height: '100vh' }}>Scroll down to trigger animation</div>
            <div
                id="animated-element"
                className={`bg-blue-500 p-8 text-white ${animate ? 'animate-bounce' : 'opacity-0 translate-y-20'
                    }`}
            >
                Content to animate
            </div>
            <div style={{ height: '100vh' }}></div>
        </div>
    );
};

export default App;
