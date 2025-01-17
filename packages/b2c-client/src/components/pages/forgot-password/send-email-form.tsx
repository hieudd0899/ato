'use client';

import { Button, Form, FormProps, Input } from 'antd';
import React from 'react';
import { STEP, useForgetPassword } from '~/store/use-forgot-password';

type SendEmailFormType = {
    username: string;
};

export const SendEmailForm = () => {
    const { setStep } = useForgetPassword();

    const onFinish: FormProps<SendEmailFormType>['onFinish'] = () => {
        setStep(STEP.OTP);
    };

    return (
        <div className="min-w-[450px] space-y-4">
            <div className="space-y-2 text-center">
                <h1 className="text-2xl font-bold">Quên mật khẩu</h1>
                <p className="text-sm font-semibold">
                    Vui lòng nhập tên đăng nhập tài khoản của bạn!
                </p>
            </div>
            <Form layout="vertical" onFinish={onFinish} size="large">
                <Form.Item<SendEmailFormType>
                    label="Tên đăng nhập:"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập tài khoản.',
                        },
                    ]}
                >
                    <Input placeholder="Nhập tên đăng nhập ..." />
                </Form.Item>
                <Button block htmlType="submit" type="primary">
                    Quên mật khẩu
                </Button>
            </Form>
        </div>
    );
};
