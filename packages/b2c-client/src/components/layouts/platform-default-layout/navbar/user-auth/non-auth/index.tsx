'use client';

import React from 'react';
import { LoginModal } from './login-modal';
import { RegisterModal } from './register-modal';

export const NonAuth = () => {
    return (
        <div className="space-x-2">
            <RegisterModal />
            <LoginModal />
        </div>
    );
};
