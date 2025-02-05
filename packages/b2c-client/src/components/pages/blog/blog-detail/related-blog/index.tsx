'use client';

import React from 'react';

import { RecommendBar } from '~/components/common/recommend-bar';

export const RelatedBlog = () => {
    return (
        <div>
            <RecommendBar
                items={[
                    {
                        id: '1',
                        url: '/',
                        image: '/images/backgrounds/about-us.png',
                        title: 'Du lịch sinh thái',
                        company: 'ModeTour',
                        time: new Date(),
                        briefInfo:
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt sed do eiusmod tempor incididunt',
                    },
                    {
                        id: '2',
                        url: '/',
                        image: '/images/backgrounds/about-us.png',
                        title: 'Du lịch sinh thái',
                        company: 'ModeTour',
                        time: new Date(),
                        briefInfo:
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt sed do eiusmod tempor incididunt',
                    },
                    {
                        id: '3',
                        url: '/',
                        image: '/images/backgrounds/about-us.png',
                        title: 'Du lịch sinh thái',
                        company: 'ModeTour',
                        time: new Date(),
                        briefInfo:
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt sed do eiusmod tempor incididunt',
                    },
                ]}
                title="Bài viết nổi bật"
            />
        </div>
    );
};
