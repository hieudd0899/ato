'use client';

import dynamic from 'next/dynamic';

const QuillEditor = dynamic(() => import('./quill-editor'), { ssr: false });

export const RichTextEditor = () => {
    return <QuillEditor />;
};
