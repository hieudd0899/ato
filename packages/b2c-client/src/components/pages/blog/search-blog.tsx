'use client';

import { Form, Input, Select } from 'antd';
import { Search } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { useDebounceValue } from 'common/hooks/use-debounce-value';
import { useQueryString } from 'common/hooks/use-query-string';

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
            <div className="flex flex-col justify-between xl:flex-row">
                <Form.Item<ISearchForm>
                    className="w-full xl:w-[450px]"
                    name="search"
                >
                    <Input
                        placeholder="Nhập nội dung tìm kiếm..."
                        suffix={<Search className="h-4 w-4 text-slate-400" />}
                    />
                </Form.Item>
                <Form.Item<ISearchForm>
                    className="w-full xl:w-[300px]"
                    name="category"
                >
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
                    />
                </Form.Item>
            </div>
        </Form>
    );
};
