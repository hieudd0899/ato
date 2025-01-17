'use client';

import { Button, Form, FormProps, Input } from 'antd';
import { useRouter } from 'next/navigation';
import React from 'react';

type ResetPasswordFormType = {
    newPassword: string;
    reNewPassword: string;
};

export const ResetPasswordForm = () => {
    const router = useRouter();

    const onFinish: FormProps<ResetPasswordFormType>['onFinish'] = () => {
        router.push('/auth/login');
    };

    return (
        <div className="w-[450px] space-y-4">
            <div className="space-y-2 text-center">
                <h1 className="text-2xl font-bold">Quên mật khẩu</h1>
                <p className="text-sm font-semibold">
                    Vui lòng nhập mật khẩu mới!
                </p>
            </div>
            <Form layout="vertical" onFinish={onFinish} size="large">
                <Form.Item<ResetPasswordFormType>
                    label="Mật khẩu mới:"
                    name="newPassword"
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập mật khẩu.',
                        },
                        {
                            pattern:
                                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}/,
                            message:
                                'Mật khẩu phải có tối thiểu tám ký tự, ít nhất một chữ cái, một số và một ký tự đặc biệt',
                        },
                    ]}
                >
                    <Input.Password placeholder="Nhập mật khẩu mới..." />
                </Form.Item>
                <Form.Item<ResetPasswordFormType>
                    label="Xác nhận mật khẩu:"
                    name="reNewPassword"
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập lại mật khẩu.',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (
                                    !value ||
                                    getFieldValue('newPassword') === value
                                ) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(
                                    new Error(
                                        'Mật khẩu xác nhận không trùng khớp.'
                                    )
                                );
                            },
                        }),
                    ]}
                >
                    <Input.Password placeholder="Nhập lại mật khẩu..." />
                </Form.Item>
                <Button block htmlType="submit" type="primary">
                    Đổi mật khẩu
                </Button>
            </Form>
        </div>
    );
};
