'use client';

import {
    isServer,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query';
import React from 'react';

type Props = React.PropsWithChildren;

let browserQueryClient: QueryClient | undefined;

const makeQueryClient = () => {
    return new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 60 * 1000,
            },
        },
    });
};

const getQueryClient = () => {
    if (isServer) {
        return makeQueryClient();
    }

    if (!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
};

export const QueryProvider: React.FC<Props> = ({ children }) => {
    const queryClient = getQueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};
