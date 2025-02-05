'use client';

import React, { Suspense } from 'react';

import dynamic from 'next/dynamic';

const QuillEditor = dynamic(() => import('./quill-editor'), { ssr: false });

type Props = {
    value: string;
    onChange: (value: string) => void;
};

export const RichTextEditor: React.FC<Props> = (props) => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <QuillEditor {...props} />
        </Suspense>
    );
};
