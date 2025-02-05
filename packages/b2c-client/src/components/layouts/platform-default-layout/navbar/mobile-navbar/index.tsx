'use client';

import React from 'react';

import { MobileMenu } from './mobile-menu';
import { Logo } from '../logo';
import { UserAuth } from '../user-auth';

export const MobileNavbar = () => {
    return (
        <div className="fixed top-0 z-50 w-full bg-white shadow">
            <div className="container flex h-20 items-center justify-between space-x-8">
                <MobileMenu />
                <Logo />
                <UserAuth />
            </div>
        </div>
    );
};
