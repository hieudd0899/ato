'use client';

import React from 'react';
import { NonAuth } from './non-auth';
import { UserProfile } from './user-profile';

const AUTH = true;

export const UserAuth = () => {
    if (!AUTH) {
        return <NonAuth />;
    }

    return <UserProfile />;
};
