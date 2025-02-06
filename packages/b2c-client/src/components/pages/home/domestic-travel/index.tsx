import React from 'react';

import { Button } from 'antd';
import Link from 'next/link';

import { TravelRecommendSlider } from './travel-recommend-slider';

export const DomesticTravel = () => {
    return (
        <div className="container space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Du lịch vùng miền</h2>
                <Link href="/product">
                    <Button type="default" variant="outlined">
                        Xem tất cả
                    </Button>
                </Link>
            </div>
            <div>
                <TravelRecommendSlider />
            </div>
        </div>
    );
};
