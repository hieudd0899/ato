'use client';

import React from 'react';

import { cn } from 'common/utils';
import { Nunito } from 'next/font/google';
import Link from 'next/link';

const nunito = Nunito({
    subsets: ['latin'],
    weight: ['700'],
    display: 'swap',
    adjustFontFallback: false,
});

export const Logo = () => {
    return (
        <Link
            className={cn(
                nunito.className,
                'text-primary cursor-pointer text-3xl font-bold'
            )}
            href="/"
        >
            ATO
        </Link>
    );
};
