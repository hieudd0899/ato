'use client';

import { cn } from 'common/utils';
import dayjs from 'dayjs';
import { Building2, Calendar } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
    id: number;
};

export const BlogItem: React.FC<Props> = ({ id }) => {
    return (
        <Link href={`/blog/${id}`}>
            <div
                className={cn(
                    'rounded-md border text-slate-600 transition-all',
                    'hover:-translate-y-2 hover:translate-x-1.5 hover:border-transparent hover:shadow-lg'
                )}
            >
                <Image
                    alt=""
                    className="h-[220px] w-full rounded-t-md object-cover"
                    height={1080}
                    src="/images/backgrounds/about-us.png"
                    width={1920}
                />
                <div className="p-4">
                    <h2 className="text-lg font-semibold">Du lịch sinh thái</h2>
                    <div className="flex items-center space-x-4">
                        <p className="flex items-center space-x-1">
                            <Building2 className="h4 w-4" />
                            <span>ABC Tourism</span>
                        </p>
                        <p className="flex items-center space-x-1">
                            <Calendar className="h4 w-4" />
                            <span>{dayjs().format('DD-MM-YYYY hh:mm')}</span>
                        </p>
                    </div>
                    <p className="line-clamp-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>
                </div>
            </div>
        </Link>
    );
};
