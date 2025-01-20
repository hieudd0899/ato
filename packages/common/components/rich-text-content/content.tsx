'use client';

import React from 'react';
import DOMPurify from 'dompurify';

type Props = {
    content: string;
};

const Content: React.FC<Props> = ({ content }) => {
    return (
        <div
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(content),
            }}
        />
    );
};

export default Content;
