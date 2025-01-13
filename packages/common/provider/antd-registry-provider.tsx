'use client';

import React from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';

export const AntdRegistryProvider: React.FC<React.PropsWithChildren> = ({
    children,
}) => {
    return <AntdRegistry>{children}</AntdRegistry>;
};
