'use client';

import React, { Suspense } from 'react';
import { ClientSuspense } from 'common/components/client-suspense';
import { ForgotPasswordForm } from './forgot-password-form';
import { STEP, useForgetPassword } from '~/store/use-forgot-password';

export const ForgotPassword = () => {
    const { setStep } = useForgetPassword();

    React.useEffect(() => {
        setStep(STEP.SEND_EMAIL);
    }, []);

    return (
        <Suspense fallback={<ClientSuspense />}>
            <div className="flex h-screen w-full items-center justify-center">
                <ForgotPasswordForm />
            </div>
        </Suspense>
    );
};
