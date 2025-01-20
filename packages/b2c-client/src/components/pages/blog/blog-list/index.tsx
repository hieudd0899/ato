'use client';

import { List } from 'antd';
import React from 'react';
import { BlogItem } from './blog-item';

export const BlogList = () => {
    return (
        <div>
            <List
                dataSource={[
                    {
                        title: 1,
                    },
                    {
                        title: 1,
                    },
                    {
                        title: 1,
                    },
                    {
                        title: 1,
                    },
                    {
                        title: 1,
                    },
                    {
                        title: 1,
                    },
                ]}
                grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 4,
                    lg: 4,
                    xl: 4,
                    xxl: 4,
                }}
                renderItem={() => (
                    <List.Item>
                        <BlogItem />
                    </List.Item>
                )}
            />
        </div>
    );
};
