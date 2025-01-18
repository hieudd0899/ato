'use client';

import React from 'react';
import { Logo } from './logo';
import { Menu } from './menu';
import { UserAuth } from './user-auth';

export const Navbar = () => {
    return (
        <nav className="fixed w-full shadow">
            <div className="container flex h-20 items-center space-x-8">
                <Logo />
                <Menu />
                <UserAuth />
            </div>
        </nav>
    );
};
