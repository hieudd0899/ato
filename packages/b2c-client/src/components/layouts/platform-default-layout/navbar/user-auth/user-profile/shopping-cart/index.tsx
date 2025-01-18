'use client';

import { ShoppingCartOutlined } from '@ant-design/icons';
import { Badge, Button, Popover } from 'antd';

import Link from 'next/link';
import React from 'react';

export const ShoppingCart = () => {
    const content: React.ReactNode = (
        <div className="min-w-[300px] space-y-4">
            <p className="text-center">Chưa có sản phẩm trong giỏ hàng.</p>
            <div className="flex items-center justify-between">
                <p>10 sản phẩm có sẵn</p>
                <Link href="/my-page/cart">
                    <Button type="primary">Xem giỏ hàng</Button>
                </Link>
            </div>
        </div>
    );

    return (
        <Popover content={content} placement="bottomRight" title="Giỏ hàng">
            <Badge count={10} offset={[5, 0]}>
                <Link
                    className="text-slate-500 hover:text-slate-500"
                    href="/my-page/cart"
                >
                    <ShoppingCartOutlined className="text-2xl" />
                </Link>
            </Badge>
        </Popover>
    );
};
