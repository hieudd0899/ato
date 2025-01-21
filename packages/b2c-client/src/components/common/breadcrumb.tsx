'use client';

import React, { useMemo } from 'react';
import { Breadcrumb as AntBreadcrumb } from 'antd';
import Link from 'next/link';

type Props = {
    items: {
        title: string;
        href?: string;
    }[];
};

export const Breadcrumb: React.FC<Props> = ({ items }) => {
    const breadcrumbItems = useMemo(() => {
        return items?.map((item, index) => {
            if (
                (items?.length > 0 && index === items.length - 1) ||
                !item?.href
            ) {
                return {
                    title: <span className="text-primary">{item.title}</span>,
                };
            }
            return {
                title: <Link href={item?.href ?? '/'}>{item.title}</Link>,
            };
        });
    }, [items]);

    return <AntBreadcrumb className="font-medium" items={breadcrumbItems} />;
};
