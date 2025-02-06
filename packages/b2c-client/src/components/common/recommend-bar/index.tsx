'use client';

import React from 'react';

import { IRecommendItem, RecommendItem } from './recommend-item';

type Props = {
    title?: string;
    items?: IRecommendItem[];
};

export const RecommendBar: React.FC<Props> = ({ title, items }) => {
    return (
        <div className="space-y-3">
            <p className="border-b-2 border-b-neutral-900 text-lg font-bold uppercase text-neutral-900">
                {title}
            </p>
            <div className="space-x-2">
                {items?.map((item) => (
                    <RecommendItem data={item} key={item?.id} />
                ))}
            </div>
        </div>
    );
};
