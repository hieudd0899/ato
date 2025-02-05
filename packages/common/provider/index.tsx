'use client';

import type React from 'react';

import { AntdConfigProvider } from './antd-config-provider';
import { AntdRegistryProvider } from './antd-registry-provider';
import { QueryProvider } from './query-provider';

type Props = React.PropsWithChildren;

export const Provider: React.FC<Props> = ({ children }) => {
    return (
        <QueryProvider>
            <AntdRegistryProvider>
                <AntdConfigProvider>{children}</AntdConfigProvider>
            </AntdRegistryProvider>
        </QueryProvider>
    );
};
