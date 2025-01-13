'use client';

import type React from 'react';
import { QueryProvider } from './query-provider';
import { AntdConfigProvider } from './antd-config-provider';

type Props = React.PropsWithChildren;

export const Provider: React.FC<Props> = ({ children }) => {
    return (
        <QueryProvider>
            <AntdConfigProvider>{children}</AntdConfigProvider>
        </QueryProvider>
    );
};
