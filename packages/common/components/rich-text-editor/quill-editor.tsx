'use client';

import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const RichTextEditor = () => {
    const [value, setValue] = React.useState<string>('');

    const reactQuillRef = React.useRef<ReactQuill>(null);

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
                        [{ header: '1' }, { header: '2' }, { font: [] }],
                        [{ size: [] }],
                        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
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
            onChange={setValue}
            placeholder="Start writing..."
            ref={reactQuillRef}
            style={{
                height: 600,
            }}
            theme="snow"
            value={value}
        />
    );
};

export default RichTextEditor;
