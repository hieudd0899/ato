'use client';

import Image from 'next/image';
import React from 'react';
import { Animated } from '~/components/common/animated';

export const IntroThumb = () => {
    return (
        <Animated className="grid grid-cols-2 gap-4" type="fade-left">
            <Image
                alt=""
                className="h-52 w-full rounded-lg object-cover"
                height={1080}
                src="/images/backgrounds/about-us.png"
                width={1920}
            />
            <Image
                alt=""
                className="h-52 w-full rounded-lg object-cover"
                height={1080}
                src="/images/backgrounds/about-us.png"
                width={1920}
            />
            <Image
                alt=""
                className="h-52 w-full rounded-lg object-cover"
                height={1080}
                src="/images/backgrounds/about-us.png"
                width={1920}
            />
            <Image
                alt=""
                className="h-52 w-full rounded-lg object-cover"
                height={1080}
                src="/images/backgrounds/about-us.png"
                width={1920}
            />
        </Animated>
    );
};
