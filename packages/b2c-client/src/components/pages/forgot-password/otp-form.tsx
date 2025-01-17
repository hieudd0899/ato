'use client';

import { Button, Form, FormProps, Input } from 'antd';
import React from 'react';
import { STEP, useForgetPassword } from '~/store/use-forgot-password';

type OTPFormType = {
    otp: number;
};

export const OTPForm = () => {
    const { setStep } = useForgetPassword();

    const onFinish: FormProps<OTPFormType>['onFinish'] = () => {
        setStep(STEP.CHANGE_PASSWORD);
    };

    return (
        <div className="space-y-4">
            <div className="space-y-2 text-center">
                <h1 className="text-2xl font-bold">Quên mật khẩu</h1>
                <p className="text-sm font-semibold">
                    <p>Vui lòng nhập mã được gửi về tài khoản email</p>
                    <p>Thangnvse15****@fpt.edu.vn</p>
                </p>
            </div>
            <Form layout="vertical" onFinish={onFinish} size="large">
                <Form.Item<OTPFormType>
                    label="Mã xác thực:"
                    name="otp"
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập mã xác nhận.',
                        },
                    ]}
                >
                    <Input.OTP />
                </Form.Item>
                <Button block htmlType="submit" type="primary">
                    Xác nhận
                </Button>
            </Form>
        </div>
    );
};
