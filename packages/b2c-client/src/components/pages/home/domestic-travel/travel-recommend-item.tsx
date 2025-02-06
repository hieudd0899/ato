'use client';

import React from 'react';

import { Rate } from 'antd';
import { currencyFormatter } from 'common/utils/formatter';
import { Building2, Clock, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const TravelRecommendItem = () => {
    return (
        <Link href="/">
            <div className="relative mr-6 h-[550px] w-full overflow-hidden">
                <Image
                    alt=""
                    className="relative h-[450px] w-[90%] rounded-md object-cover"
                    height={900}
                    src="/images/backgrounds/about-us.png"
                    width={1600}
                />

                <div className="absolute bottom-4 right-4 z-10">
                    <div className="h-auto w-80 rounded-t-xl rounded-bl-xl bg-white p-4 shadow-[5px_5px_15px_rgba(17,17,17,0.3)]">
                        <h3 className="line-clamp-2 text-lg font-bold">
                            Tour Kỳ Co và Eo Gió (Bãi Dứa + Đồi cát Phương....)
                        </h3>
                        <div className="flex items-center space-x-1.5">
                            <Rate
                                allowHalf
                                disabled
                                style={{
                                    fontSize: 14,
                                }}
                                value={4.9}
                            />
                            <span className="text-primary font-medium">
                                4.9
                            </span>
                        </div>
                        <div className="flex space-x-2">
                            <p className="flex items-center space-x-1 text-sm">
                                <Building2 className="h-4 w-4" />
                                <span className="font-medium">
                                    ABS Tour Company
                                </span>
                            </p>
                            <p className="flex items-center space-x-1 text-sm">
                                <Clock className="h-4 w-4" />
                                <span className="font-medium">
                                    3 ngày 2 đêm
                                </span>
                            </p>
                        </div>
                        <div className="flex items-center space-x-2 text-sm font-medium">
                            <div className="flex items-center space-x-1">
                                <MapPin className="h-4 w-4" />
                                <span>Tây Ninh</span>
                            </div>
                            <p>-</p>
                            <div className="flex items-center space-x-1">
                                <MapPin className="h-4 w-4" />
                                <span>Đắc Nông</span>
                            </div>
                        </div>
                        <div className="text-end text-2xl font-bold">
                            {currencyFormatter(1999000)}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};
