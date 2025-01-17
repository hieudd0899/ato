'use client';

import React, { useMemo } from 'react';
import Link from 'next/link';
import { OTPForm } from './otp-form';
import { SendEmailForm } from './send-email-form';
import { STEP, useForgetPassword } from '~/store/use-forgot-password';
import { ResetPasswordForm } from './reset-password-form';

export const ForgotPasswordForm = () => {
    const { step } = useForgetPassword();

    const renderForm = useMemo(() => {
        switch (step) {
            case STEP.SEND_EMAIL:
                return <SendEmailForm />;
            case STEP.OTP:
                return <OTPForm />;
            case STEP.CHANGE_PASSWORD:
                return <ResetPasswordForm />;
            default:
                return <SendEmailForm />;
        }
    }, [step]);

    return (
        <div className="space-y-4 rounded-xl bg-white px-10 py-14">
            {renderForm}
            <div className="space-x-4 text-center text-sm">
                <span className="font-semibold">Bạn đã có tài khoản</span>
                <Link
                    className="font-bold text-sky-500 underline transition-colors hover:text-sky-400"
                    href="/auth/login"
                >
                    Đăng nhập
                </Link>
            </div>
        </div>
    );
};
