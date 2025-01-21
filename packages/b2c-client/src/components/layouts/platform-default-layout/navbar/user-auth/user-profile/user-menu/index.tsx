'use client';

import { UserOutlined } from '@ant-design/icons';
import { Avatar, Dropdown, MenuProps } from 'antd';
import { LogOutIcon, ShoppingBagIcon, User } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const items: MenuProps['items'] = [
    {
        key: '1',
        label: <Link href="/my-page">Tài khoản của tôi</Link>,
        icon: <User className="h-4 w-4" />,
    },
    {
        key: '2',
        label: <Link href="/my-page">Đơn mua</Link>,
        icon: <ShoppingBagIcon className="h-4 w-4" />,
    },
    {
        key: '3',
        danger: true,
        label: <p className="cursor-pointer">Đăng xuất</p>,
        icon: <LogOutIcon className="h-4 w-4" />,
    },
];

export const UserMenu = () => {
    return (
        <Dropdown menu={{ items }} placement="bottomCenter">
            <Link href="/my-page">
                <Avatar icon={<UserOutlined />} size={32} />
            </Link>
        </Dropdown>
    );
};
