'use client';

import type React from 'react';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

import { PRIMARY_COLOR } from '../constants/colors';

export const ProgressBarProviders: React.FC<React.PropsWithChildren> = ({
    children,
}) => {
    return (
        <>
            {children}
            <ProgressBar
                color={PRIMARY_COLOR}
                height="2px"
                options={{ showSpinner: false }}
                shallowRouting
            />
        </>
    );
};
