'use client';

import React from 'react';

import { Information } from './information';
import { IntroThumb } from './intro-thumb';

export const Introduce = () => {
    return (
        <div className="container grid grid-cols-2 gap-x-10 py-40">
            <Information />
            <IntroThumb />
        </div>
    );
};
