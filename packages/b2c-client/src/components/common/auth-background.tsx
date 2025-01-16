'use client';

import React from 'react';
import Image from 'next/image';

type Props = React.PropsWithChildren;

export const AuthBackground: React.FC<Props> = ({ children }) => {
    return (
        <div className="bg-primary relative h-screen w-full">
            <Image alt="ato" fill src="/images/backgrounds/login.svg" />
            <div className="relative">{children}</div>
        </div>
    );
};
