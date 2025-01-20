'use client';

import React from 'react';
import { Breadcrumb } from '~/components/common/breadcrumb';
import { BlogContent } from './blog-content';

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
            <div className="grid grid-cols-3">
                <div className="col-span-2">
                    <BlogContent />
                </div>
            </div>
        </div>
    );
};
