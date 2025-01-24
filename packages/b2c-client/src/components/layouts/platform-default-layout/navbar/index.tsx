'use client';

import React from 'react';
import { isMobile } from 'react-device-detect';
import { Logo } from './logo';
import { Menu } from './menu';
import { UserAuth } from './user-auth';
import { MobileNavbar } from './mobile-navbar';

const Navbar = () => {
    if (isMobile) {
        return <MobileNavbar />;
    }
    return (
        <div className="fixed z-50 w-full bg-white shadow">
            <div className="container flex h-20 items-center space-x-8">
                <Logo />
                <Menu />
                <UserAuth />
            </div>
        </div>
    );
};

export default Navbar;
