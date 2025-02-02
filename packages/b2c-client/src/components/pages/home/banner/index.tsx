'use client';

import { ArrowRightOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Animated } from '~/components/common/animated';

export const Banner = () => {
    return (
        <div className="relative h-[500px] w-full">
            <Image
                alt="ato"
                className="absolute left-0 top-0 h-full w-full object-cover"
                height={1080}
                src="/images/backgrounds/about-us.png"
                width={1920}
            />
            <div className="relative flex h-full w-full flex-col items-center justify-center space-y-6 bg-green-600 bg-opacity-20">
                <Animated
                    className="space-y-5 text-center text-white"
                    type="fade-up"
                >
                    <p className="text-4xl font-bold">
                        Phát triển bền vững, bao trùm và đa giá trị
                    </p>
                    <h1 className="text-6xl font-bold">Du lịch nông thôn</h1>
                    <p className="text-2xl font-bold">
                        Nền tảng du lịch nông nghiệp kết hợp giới thiệu sản phẩm
                        OCOP địa phương
                    </p>
                </Animated>
                <Animated className="animate-delay-300" type="fade-down">
                    <Link href="/">
                        <Button
                            icon={<ArrowRightOutlined />}
                            iconPosition="end"
                            shape="round"
                            size="large"
                            type="primary"
                        >
                            Khám phá
                        </Button>
                    </Link>
                </Animated>
            </div>
        </div>
    );
};
