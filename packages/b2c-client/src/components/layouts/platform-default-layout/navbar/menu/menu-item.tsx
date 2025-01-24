'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useMemo } from 'react';
import { cn } from 'common/utils';

export interface IMenuItem {
    label: string;
    href: string;
}

type Props = {
    data: IMenuItem;
};

export const MenuItem: React.FC<Props> = ({ data }) => {
    const pathname = usePathname();

    const isActive = useMemo(() => {
        if (pathname === '/' && data.href === '/' && pathname === data.href) {
            return true;
        }
        if (
            pathname !== '/' &&
            data.href !== '/' &&
            pathname.startsWith(data.href)
        ) {
            return true;
        }
        return false;
    }, [pathname, data]);

    return (
        <Link
            className={cn(
                'font-medium text-slate-600 transition-colors',
                'hover:text-primary',
                isActive && 'text-primary'
            )}
            href={data.href}
        >
            {data.label}
        </Link>
    );
};
