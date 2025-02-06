'use client';

import React from 'react';

import Image from 'next/image';

export const Banner = () => {
    return (
        <div className="relative h-80 w-full">
            <Image
                alt="ato"
                className="absolute h-80 w-full object-cover"
                height={1080}
                src="/images/backgrounds/about-us.png"
                width={1920}
            />
            <div className="relative h-full w-full bg-green-600 bg-opacity-35">
                <div className="container flex h-full items-center">
                    <p className="text-5xl font-extrabold text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
                        Về chúng tôi
                    </p>
                </div>
            </div>
        </div>
    );
};
