'use client';

import React from 'react';
import { ShoppingCart } from './shopping-cart';
import { UserMenu } from './user-menu';

export const UserProfile = () => {
    return (
        <div className="flex items-center space-x-8">
            <ShoppingCart />
            <UserMenu />
        </div>
    );
};
