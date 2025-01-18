'use client';

import { UserOutlined } from '@ant-design/icons';
import { Avatar, Dropdown, MenuProps } from 'antd';
import Link from 'next/link';
import React from 'react';

const items: MenuProps['items'] = [
    {
        key: '1',
        label: <Link href="/my-page">Tài khoản cả tôi</Link>,
    },
    {
        key: '2',
        label: <Link href="/my-page">Đơn mua</Link>,
    },
    {
        key: '3',
        danger: true,
        label: <p className="cursor-pointer">Đăng xuất</p>,
    },
];

export const UserMenu = () => {
    return (
        <Dropdown menu={{ items }}>
            <Link href="/my-page">
                <Avatar icon={<UserOutlined />} size={32} />
            </Link>
        </Dropdown>
    );
};
