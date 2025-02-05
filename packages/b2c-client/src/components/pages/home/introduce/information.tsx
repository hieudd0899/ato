'use client';

import React from 'react';

import { ArrowRightOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import Link from 'next/link';

import { Animated } from '~/components/common/animated';

export const Information = () => {
    return (
        <Animated className="space-y-7" type="fade-right">
            <h2 className="text-5xl font-bold">
                Du lịch bền vững, Du lịch tương lai
            </h2>
            <p>
                Du lịch nông thôn (Rural Tourism) được hiểu là loại hình du lịch
                diễn ra ở khu vực nông thôn, thường có quy mô kinh doanh nhỏ,
                không gian mở, được tiếp xúc trực tiếp và hòa mình vào thiên
                nhiên, gắn với những đặc điểm tiêu biểu ở khu vực nông thôn,
                những di sản văn hóa xã hội và văn hóa truyền thống ở làng xã…;
                thể hiện đặc tính đa dạng về môi trường, kinh tế, lịch sử, địa
                điểm của mỗi vùng nông thôn.
            </p>
            <Link href="/about">
                <Button
                    icon={<ArrowRightOutlined />}
                    iconPosition="end"
                    style={{
                        padding: 0,
                    }}
                    type="link"
                >
                    Về chúng tối
                </Button>
            </Link>
        </Animated>
    );
};
