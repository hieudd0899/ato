'use client';

import React from 'react';
import { Navbar } from './navbar';

type Props = React.PropsWithChildren;

export const PlatformDefaultLayout: React.FC<Props> = ({ children }) => {
    return (
        <div>
            <Navbar />
            <section className="pt-20">{children}</section>
        </div>
    );
};
