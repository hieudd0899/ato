'use client';

import React from 'react';

import { BlogContent } from './blog-content';
import { RelatedBlog } from './related-blog';
import { Breadcrumb } from '~/components/common/breadcrumb';

export const BlogDetail = () => {
    return (
        <div className="container space-y-4 py-10">
            <Breadcrumb
                items={[
                    {
                        title: 'Trang chủ',
                        href: '/',
                    },
                    {
                        title: 'Tin tức, sự kiện',
                        href: '/blog',
                    },
                    {
                        title: 'Du lịch sinh thái',
                    },
                ]}
            />
            <div className="grid grid-cols-1 space-y-10 py-4 xl:grid-cols-3 xl:space-x-12 xl:space-y-0">
                <div className="xl:col-span-2">
                    <BlogContent />
                </div>
                <div>
                    <div className="sticky top-24">
                        <RelatedBlog />
                    </div>
                </div>
            </div>
        </div>
    );
};
