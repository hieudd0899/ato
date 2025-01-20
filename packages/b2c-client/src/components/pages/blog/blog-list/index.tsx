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
                        id: 1,
                    },
                    {
                        id: 2,
                    },
                    {
                        id: 3,
                    },
                    {
                        id: 4,
                    },
                    {
                        id: 5,
                    },
                    {
                        id: 6,
                    },
                ]}
                grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 2,
                    lg: 2,
                    xl: 4,
                    xxl: 4,
                }}
                renderItem={(item) => (
                    <List.Item>
                        <BlogItem id={item.id} />
                    </List.Item>
                )}
            />
        </div>
    );
};
