'use client';

import Image from 'next/image';
import React from 'react';

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
            <div className="bg-primary relative h-full w-full bg-opacity-35">
                <div className="container flex h-full items-center">
                    <p className="text-5xl font-extrabold text-white">
                        Về chúng tôi
                    </p>
                </div>
            </div>
        </div>
    );
};
