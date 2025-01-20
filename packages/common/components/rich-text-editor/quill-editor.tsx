'use client';

import React, { Suspense } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

type Props = {
    value: string;
    onChange: (value: string) => void;
};

const RichTextEditor: React.FC<Props> = ({ value, onChange }) => {
    const [currentValue, setCurrentValue] = React.useState<string>(value);

    const reactQuillRef = React.useRef<ReactQuill>(null);

    React.useEffect(() => {
        onChange(currentValue);
    }, [currentValue]);

    const imageHandler = React.useCallback(() => {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.click();
        input.onchange = async () => {
            if (input !== null && input.files !== null) {
                const file = input.files[0];
                // eslint-disable-next-line no-console
                console.log(file);
                const url =
                    'https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
                const quill = reactQuillRef.current;
                if (quill) {
                    const range = quill.getEditorSelection();
                    if (range) {
                        quill
                            .getEditor()
                            .insertEmbed(range.index, 'image', url);
                    }
                }
            }
        };
    }, []);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ReactQuill
                formats={[
                    'header',
                    'font',
                    'size',
                    'bold',
                    'italic',
                    'underline',
                    'strike',
                    'blockquote',
                    'list',
                    'bullet',
                    'indent',
                    'link',
                    'image',
                    'video',
                    'code-block',
                ]}
                modules={{
                    toolbar: {
                        container: [
                            [
                                { header: '1' },
                                { header: '2' },
                                { header: '3' },
                                { header: '4' },
                                { font: [] },
                            ],
                            [{ size: [] }],
                            [
                                'bold',
                                'italic',
                                'underline',
                                'strike',
                                'blockquote',
                            ],
                            [
                                { list: 'ordered' },
                                { list: 'bullet' },
                                { indent: '-1' },
                                { indent: '+1' },
                            ],
                            ['link', 'image', 'video'],
                            ['code-block'],
                            ['clean'],
                        ],
                        handlers: {
                            image: imageHandler,
                        },
                    },
                    clipboard: {
                        matchVisual: false,
                    },
                }}
                onChange={setCurrentValue}
                placeholder="Start writing..."
                ref={reactQuillRef}
                style={{
                    height: 600,
                }}
                theme="snow"
                value={currentValue}
            />
        </Suspense>
    );
};

export default RichTextEditor;
