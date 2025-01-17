'use client';

import { Button, Checkbox, Form, FormProps, Input } from 'antd';
import Link from 'next/link';
import React from 'react';
import { LoginFormType } from '~/actions/auth/login';

export const LoginForm = () => {
    const onFinish: FormProps<LoginFormType>['onFinish'] = () => {};

    return (
        <div className="min-w-[500px] space-y-4 rounded-xl bg-white px-10 py-14">
            <div className="space-y-2 text-center">
                <h1 className="text-2xl font-bold">Đăng nhập</h1>
                <p className="text-sm font-semibold">
                    Chào mừng bạn đến với COCP ATO
                </p>
            </div>
            <Form layout="vertical" onFinish={onFinish} size="large">
                <Form.Item<LoginFormType>
                    label="Tên đăng nhập:"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập tài khoản.',
                        },
                    ]}
                >
                    <Input placeholder="Nhập tên đăng nhập..." />
                </Form.Item>
                <Form.Item<LoginFormType>
                    label="Mật khẩu:"
                    name="password"
                    rules={[
                        { required: true, message: 'Vui lòng nhập mật khẩu.' },
                    ]}
                >
                    <Input.Password placeholder="Nhập mật khẩu..." />
                </Form.Item>
                <div className="flex items-start justify-between">
                    <Form.Item<LoginFormType>
                        label={null}
                        name="remember"
                        valuePropName="checked"
                    >
                        <Checkbox>Nhớ mật khẩu</Checkbox>
                    </Form.Item>
                    <Form.Item>
                        <Link href="/auth/forgot-password">Quên mật khẩu?</Link>
                    </Form.Item>
                </div>
                <Button block htmlType="submit" type="primary">
                    Đăng nhập
                </Button>
            </Form>
            <div className="space-x-4 text-center text-sm">
                <span className="font-semibold">Bạn không có tài khoản</span>
                <Link
                    className="font-bold text-sky-400 underline transition-colors hover:text-sky-300"
                    href="/auth/register-account"
                >
                    Tạo tài khoản
                </Link>
            </div>
        </div>
    );
};
