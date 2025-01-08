'use client';

import type React from 'react';
import { QueryProvider } from './query-provider';

type Props = React.PropsWithChildren;

export const Provider: React.FC<Props> = ({ children }) => {
    return <QueryProvider>{children}</QueryProvider>;
};
