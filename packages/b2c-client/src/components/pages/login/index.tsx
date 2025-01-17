'use client';

import { ClientSuspense } from 'common/components/client-suspense';
import React from 'react';

import { LoginForm } from './login-form';

export const Login = () => {
    return (
        <React.Suspense fallback={<ClientSuspense />}>
            <div className="flex h-screen w-full items-center justify-center">
                <LoginForm />
            </div>
        </React.Suspense>
    );
};
