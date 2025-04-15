'use client';

import React from 'react';

import { RichTextContent } from 'common/components/rich-text-content';
import { RichTextEditor } from 'common/components/rich-text-editor';

const Page = () => {
    const [richtextValue, setRichtextValue] = React.useState<string>();

    const copy = async (value: string | number) => {
        return navigator.clipboard.writeText(String(value));
    };
    return (
        <div className="space-y-6">
            <RichTextEditor
                onChange={(value) => {
                    setRichtextValue(value);
                }}
                value=""
            />
            {/* <RichTextContent data={richtextValue ?? ''} /> */}
            <div>{richtextValue}</div>

            <div>
                <span
                    className="cursor-pointer border p-2"
                    onClick={async () => {
                        if (richtextValue) {
                            await copy(richtextValue);
                        }
                    }}
                    role="presentation"
                >
                    Copy
                </span>
            </div>
        </div>
    );
};

export default Page;
