'use client';

import React, { Suspense } from 'react';
import { ClientSuspense } from 'common/components/client-suspense';
import { ForgotPasswordForm } from './forgot-password-form';

export const ForgotPassword = () => {
    return (
        <Suspense fallback={<ClientSuspense />}>
            <div className="flex h-screen w-full items-center justify-center">
                <ForgotPasswordForm />
            </div>
        </Suspense>
    );
};
