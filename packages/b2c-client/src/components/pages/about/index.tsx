'use client';

import React from 'react';
import { Banner } from './banner';
import { Breadcrumb } from '~/components/common/breadcrumb';
import { Content } from './content';
import { RecommendBar } from '~/components/common/recommend-bar';

const DUMMY_CONTENT = '<div><p>test dummy</p><p>test dummy</p></div>';

export const About = () => {
    return (
        <div>
            <Banner />
            <div className="container py-10">
                <Breadcrumb
                    items={[
                        {
                            title: 'Trang chủ',
                            href: '/',
                        },
                        {
                            title: 'Về chúng tôi',
                        },
                    ]}
                />
                <div>
                    <div className="grid grid-cols-3 space-x-12 py-4">
                        <div className="col-span-2 h-[10000px]">
                            <Content content={DUMMY_CONTENT} />
                        </div>
                        <div>
                            <div className="sticky top-24">
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
                                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...',
                                        },
                                    ]}
                                    title="Các loại hình du lịch"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
