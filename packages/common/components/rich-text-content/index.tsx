'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const Content = dynamic(() => import('./content'), { ssr: false });

type Props = { data: string };

export const RichTextContent: React.FC<Props> = ({ data }) => {
    return <Content content={data} />;
};
