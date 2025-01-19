'use client';

import Image from 'next/image';
import React from 'react';
import { Building2, Calendar } from 'lucide-react';
import dayjs from 'dayjs';
import Link from 'next/link';

export interface IRecommendItem {
    id: string | number;
    url: string;
    image: string;
    title: string;
    company: string;
    time: Date;
    briefInfo: string;
}

type Props = {
    data?: IRecommendItem;
};

export const RecommendItem: React.FC<Props> = ({ data }) => {
    return (
        <Link href={data?.url ?? '/'}>
            <div className="grid grid-cols-3 space-x-4">
                <Image
                    alt={data?.title ?? 'ato'}
                    className="h-[130px] w-full rounded-md object-cover"
                    height={600}
                    src={data?.image ?? ''}
                    width={600}
                />
                <div className="col-span-2 space-y-1">
                    <h2 className="text-primary text-lg font-bold">
                        {data?.title}
                    </h2>
                    <div className="flex gap-x-4 text-sm font-semibold">
                        <p className="flex gap-x-1">
                            <Building2 className="h-4 w-4" />
                            <span>{data?.company}</span>
                        </p>
                        <p className="flex gap-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>
                                {dayjs(data?.time).format('DD/MM/YYYY hh:mm')}
                            </span>
                        </p>
                    </div>
                    <p className="line-clamp-3">{data?.briefInfo}</p>
                </div>
            </div>
        </Link>
    );
};
