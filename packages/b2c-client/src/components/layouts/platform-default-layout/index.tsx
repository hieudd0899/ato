'use client';

import dynamic from 'next/dynamic';
import React from 'react';

const Navbar = dynamic(() => import('./navbar'), { ssr: false });

type Props = React.PropsWithChildren;

export const PlatformDefaultLayout: React.FC<Props> = ({ children }) => {
    return (
        <div>
            <React.Suspense fallback={<p>Loading...</p>}>
                <Navbar />
            </React.Suspense>
            <section className="pt-20">{children}</section>
        </div>
    );
};
