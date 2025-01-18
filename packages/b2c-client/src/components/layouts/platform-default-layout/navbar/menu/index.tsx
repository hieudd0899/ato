'use client';

import React from 'react';
import { IMenuItem, MenuItem } from './menu-item';

const MENU_ITEMS: IMenuItem[] = [
    {
        href: '/',
        label: 'Trang chủ',
    },
    {
        href: '/about',
        label: 'Giới thiệu',
    },
    {
        href: '/blog',
        label: 'Tin tức, sự kiện',
    },
    {
        href: '/product',
        label: 'Sản phẩm OCOP',
    },
    {
        href: '/tourism',
        label: 'Hoạt động du lịch',
    },
    {
        href: '/country-beauty',
        label: 'Vẻ đẹp vùng quê',
    },
    {
        href: '/experience-model',
        label: 'Mô hình kinh nghiệm',
    },
];

export const Menu = () => {
    return (
        <div className="flex flex-1 space-x-4">
            {MENU_ITEMS.map((item) => (
                <MenuItem data={item} key={item.href} />
            ))}
        </div>
    );
};
