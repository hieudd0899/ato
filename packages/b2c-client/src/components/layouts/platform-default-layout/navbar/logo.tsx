'use client';

import Link from 'next/link';
import React from 'react';
import { Nunito } from 'next/font/google';
import { cn } from 'common/utils';

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
