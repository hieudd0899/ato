'use client';

import React from 'react';
import DOMPurify from 'dompurify';
import styles from './content.module.scss';

type Props = {
    content: string;
};

const Content: React.FC<Props> = ({ content }) => {
    return (
        <div
            className={styles.wrapper}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(content),
            }}
        />
    );
};

export default Content;
