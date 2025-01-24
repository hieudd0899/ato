'use client';

import React from 'react';
import { Banner } from './banner';
import { Breadcrumb } from '~/components/common/breadcrumb';
import { Content } from './content';
import { RecommendBar } from '~/components/common/recommend-bar';

const RICHTEXT_DATA = `<div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <br/>
                <img alt="" src="/images/backgrounds/about-us.png" />
                <br/>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <br/>
                <img alt="" src="/images/backgrounds/about-us.png" />
                <br/>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>`;

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
                    <div className="grid grid-cols-1 space-y-10 py-4 xl:grid-cols-3 xl:space-x-12 xl:space-y-0">
                        <div className="xl:col-span-2">
                            <Content content={RICHTEXT_DATA} />
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
