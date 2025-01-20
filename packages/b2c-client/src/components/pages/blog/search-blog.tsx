'use client';

import { Form, Input, Select } from 'antd';
import { Search } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { useDebounceValue } from 'common/hooks/use-debounce-value';
import { useQueryString } from 'common/hooks/useQueryString';

interface ISearchForm {
    search?: string;
    category?: string;
}

export const SearchBlog = () => {
    const [form] = Form.useForm();
    const router = useRouter();
    const pathname = usePathname();
    const { replaceParams } = useQueryString();

    const formValue = Form.useWatch<ISearchForm>([], form);

    const searchParams = useDebounceValue<ISearchForm>(formValue);

    useEffect(() => {
        router.replace(
            replaceParams({
                url: pathname,
                query: {
                    ...searchParams,
                },
            })
        );
    }, [searchParams]);

    return (
        <Form form={form}>
            <div className="flex justify-between">
                <Form.Item<ISearchForm> name="search">
                    <Input
                        placeholder="Nhập nội dung tìm kiếm..."
                        style={{
                            width: 450,
                        }}
                        suffix={<Search className="h-4 w-4 text-slate-400" />}
                    />
                </Form.Item>
                <Form.Item<ISearchForm> name="category">
                    <Select
                        allowClear
                        options={[
                            {
                                value: 'option1',
                                label: 'Option 1',
                            },
                            {
                                value: 'option2',
                                label: 'Option 2',
                            },
                            {
                                value: 'option3',
                                label: 'Option 3',
                            },
                            {
                                value: 'option4',
                                label: 'Option 4',
                            },
                        ]}
                        placeholder="Loại tin tức"
                        style={{
                            width: 300,
                        }}
                    />
                </Form.Item>
            </div>
        </Form>
    );
};
