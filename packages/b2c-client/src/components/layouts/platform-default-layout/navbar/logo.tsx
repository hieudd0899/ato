'use client';

import Link from 'next/link';
import React from 'react';

export const Logo = () => {
    return (
        <Link
            className="text-primary cursor-pointer text-3xl font-extrabold"
            href="/"
        >
            ATO
        </Link>
    );
};
