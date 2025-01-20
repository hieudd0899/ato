'use client';

import { ClientSuspense } from 'common/components/client-suspense';
import React from 'react';
import { Breadcrumb } from '~/components/common/breadcrumb';
import { SearchBlog } from './search-blog';
import { BlogList } from './blog-list';

export const Blog = () => {
    return (
        <React.Suspense fallback={<ClientSuspense />}>
            <div className="container space-y-4 py-10">
                <Breadcrumb
                    items={[
                        {
                            title: 'Trang chủ',
                            href: '/',
                        },
                        {
                            title: 'Tin tức, sự kiện',
                        },
                    ]}
                />
                <SearchBlog />
                <BlogList />
            </div>
        </React.Suspense>
    );
};
