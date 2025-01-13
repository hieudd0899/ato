import { Button } from 'antd';
import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className="flex h-screen w-full flex-col items-center justify-center space-y-4">
            <h1 className="text-primary text-8xl font-extrabold">404</h1>
            <h2 className="text-3xl font-semibold">
                Rất tiếc! Trang này không tồn tại
            </h2>
            <p>Vui lòng kiểm tra lại hoặc quay về trang chủ.</p>
            <Link href="/">
                <Button type="primary">Quay về Trang chủ</Button>
            </Link>
        </div>
    );
};

export default NotFoundPage;
