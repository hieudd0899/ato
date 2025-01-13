'use client';

import { useMutation } from '@tanstack/react-query';
import { Button, Form, FormProps, Input } from 'antd';
import React from 'react';
import { loginAction, LoginFormType } from '~/actions/auth/login';

export const Login = () => {
    const { mutate, isPending } = useMutation({
        mutationFn: (payload: LoginFormType) => loginAction(payload),
    });

    const onFinish: FormProps<LoginFormType>['onFinish'] = (values) => {
        mutate(values);
    };

    return (
        <div className="flex h-screen w-full items-center justify-center">
            <div className="rounded-lg border p-6 shadow-lg">
                <h1 className="text-primary pb-6 text-center text-3xl font-bold">
                    ATO Admin Panel
                </h1>

                <div className="min-w-80">
                    <Form
                        disabled={isPending}
                        layout="vertical"
                        onFinish={onFinish}
                    >
                        <Form.Item<LoginFormType>
                            label="Tên đăng nhập"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input placeholder="Tên đăng nhập..." />
                        </Form.Item>
                        <Form.Item<LoginFormType>
                            label="Mật khẩu"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input.Password placeholder="Nhập mật khẩu..." />
                        </Form.Item>
                        <Button
                            className="w-full"
                            htmlType="submit"
                            loading={isPending}
                            type="primary"
                        >
                            Đăng nhập
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};
