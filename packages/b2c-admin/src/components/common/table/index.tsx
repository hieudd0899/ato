'use client';

import React from 'react';
import { Table as AntTable } from 'antd';
import type { PaginationProps, TableProps } from 'antd';
import { AnyObject } from 'antd/es/_util/type';
import { useQueryString } from 'common/hooks/use-query-string';
import { usePathname, useRouter } from 'next/navigation';
import { Sorts } from 'common/types/common';
import lodash from 'lodash';

type Props = Omit<TableProps, 'onChange' | 'pagination'> & {
    pagination?: Omit<
        PaginationProps,
        'current' | 'pageSize' | 'defaultPageSize' | 'pageSizeOptions'
    >;
};

export const Table: React.FC<Props> = ({ pagination, ...props }) => {
    const router = useRouter();
    const pathname = usePathname();
    const { params, pushParams } = useQueryString();

    React.useEffect(() => {
        if (lodash.isEmpty(params)) {
            router.replace(
                pushParams({
                    url: pathname,
                    query: {
                        current: 1,
                        pageSize: 10,
                    },
                })
            );
        }
    }, [params]);

    return (
        <AntTable
            onChange={(tablePagination, _, sorter) => {
                const sorterInfo = sorter as Sorts<AnyObject>;

                router.replace(
                    pushParams({
                        url: pathname,
                        query: {
                            current: tablePagination.current,
                            pageSize: tablePagination.pageSize,
                            sortBy: sorterInfo.field as string,
                            sortOrder: sorterInfo.order as string,
                        },
                    })
                );
            }}
            pagination={{
                current: Number(params?.current),
                pageSize: Number(params?.pageSize) || 10,
                defaultPageSize: 10,
                ...pagination,
            }}
            {...props}
        />
    );
};
