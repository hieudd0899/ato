'use client';

import React from 'react';

import { ClientSuspense } from 'common/components/client-suspense';

import { BlogList } from './blog-list';
import { SearchBlog } from './search-blog';
import { Breadcrumb } from '~/components/common/breadcrumb';

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
