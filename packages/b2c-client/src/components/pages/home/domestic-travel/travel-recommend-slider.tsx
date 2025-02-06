'use client';

import React, { useRef } from 'react';

import { Button } from 'antd';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Swiper as TypeSwiper } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { TravelRecommendItem } from './travel-recommend-item';
import { Animated } from '~/components/common/animated';

export const TravelRecommendSlider = () => {
    const swiperRef = useRef<TypeSwiper>();

    return (
        <Animated type="fade-up">
            <Swiper
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                slidesPerView="auto"
                spaceBetween={30}
            >
                <SwiperSlide className="!h-[550px] !w-[450px]">
                    <TravelRecommendItem />
                </SwiperSlide>
                <SwiperSlide className="!h-[550px] !w-[450px]">
                    <TravelRecommendItem />
                </SwiperSlide>
                <SwiperSlide className="!h-[550px] !w-[450px]">
                    <TravelRecommendItem />
                </SwiperSlide>
                <SwiperSlide className="!h-[550px] !w-[450px]">
                    <TravelRecommendItem />
                </SwiperSlide>
                <SwiperSlide className="!h-[550px] !w-[450px]">
                    <TravelRecommendItem />
                </SwiperSlide>
                <SwiperSlide className="!h-[550px] !w-[450px]">
                    <TravelRecommendItem />
                </SwiperSlide>
                <SwiperSlide className="!h-[550px] !w-[450px]">
                    <TravelRecommendItem />
                </SwiperSlide>
            </Swiper>
            <div className="space-x-2 text-end">
                <Button
                    icon={<ChevronLeft className="h-4 w-4" />}
                    onClick={() => {
                        swiperRef.current?.slidePrev();
                    }}
                />
                <Button
                    icon={<ChevronRight className="h-4 w-4" />}
                    onClick={() => {
                        swiperRef.current?.slideNext();
                    }}
                />
            </div>
        </Animated>
    );
};
