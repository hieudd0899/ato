'use client';

import React from 'react';
import { RichTextContent } from 'common/components/rich-text-content';

type Props = {
    content: string;
};

export const Content: React.FC<Props> = ({ content }) => {
    return <RichTextContent data={content} />;
};
