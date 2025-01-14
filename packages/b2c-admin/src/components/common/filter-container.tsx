'use client';

import { ReloadOutlined } from '@ant-design/icons';
import {
    Button,
    Col,
    DatePicker,
    Form,
    FormProps,
    Input,
    Row,
    Select,
} from 'antd';
import { Rule } from 'antd/lib/form';
import { FormLayout } from 'antd/lib/form/Form';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { useQueryString } from 'common/hooks/useQueryString';
import dayjs from 'dayjs';

type FilterItemBase = {
    name: string;
    label: string;
    placeholder?: string;
    rules?: Rule[];
    className?: string;
    colSpan?: number;
};

type TextField = FilterItemBase & {
    type: 'text';
};

type SelectField = FilterItemBase & {
    type: 'select';
    options: { value: string | number; label: React.ReactNode }[];
    showSearch?: boolean;
};

type DatePickerField = FilterItemBase & {
    type: 'date-picker';
    picker?: 'week' | 'month' | 'quarter' | 'year';
};

type RangePickerField = FilterItemBase & {
    type: 'range-picker';
    picker?: 'week' | 'month' | 'quarter' | 'year';
    showTime?: boolean;
};

export type Field =
    | TextField
    | SelectField
    | DatePickerField
    | RangePickerField;

type Props = {
    items: Field[];
    layout?: FormLayout;
};

export const FilterContainer: React.FC<Props> = ({ items, layout }) => {
    const [form] = Form.useForm();

    const router = useRouter();
    const pathname = usePathname();
    const { queryString, pushQueryString } = useQueryString();

    const onFinish: FormProps<Record<string, string>>['onFinish'] = (
        values
    ) => {
        const queryObject = Object.entries(values)?.map((item) => {
            if (Array.isArray(item?.[1])) {
                return {
                    [item[0]]: item?.[1]?.map((itemValue) => {
                        if (dayjs.isDayjs(itemValue)) {
                            return dayjs(itemValue).format('YYYY-MM-DD');
                        }
                        return item.values;
                    }),
                };
            }
            if (dayjs.isDayjs(item?.[1])) {
                return {
                    [item?.[0]]: dayjs(item?.[1]).format('YYYY-MM-DD'),
                };
            }
            return { [item?.[0]]: item?.[1] };
        }) as Array<Record<string, string | string[]>>;

        router.replace(
            pushQueryString({
                url: pathname,
                query: queryObject.reduce((acc, curr) => ({ ...acc, ...curr })),
            })
        );
    };

    return (
        <Form
            form={form}
            initialValues={queryString()}
            layout={layout}
            onFinish={onFinish}
        >
            <Row gutter={16}>
                {items?.map((field) => {
                    return (
                        <Col
                            className="gutter-row"
                            key={field?.name}
                            span={field?.colSpan ?? 6}
                        >
                            <Form.Item
                                label={field?.label ?? field.name}
                                name={field?.name}
                                rules={field?.rules}
                            >
                                {(() => {
                                    switch (field.type) {
                                        case 'text':
                                            return (
                                                <Input
                                                    className={field?.className}
                                                    placeholder={
                                                        field?.placeholder
                                                    }
                                                />
                                            );
                                        case 'select':
                                            return (
                                                <Select
                                                    allowClear
                                                    className={field?.className}
                                                    options={field.options}
                                                    placeholder={
                                                        field?.placeholder
                                                    }
                                                    showSearch={
                                                        field?.showSearch
                                                    }
                                                />
                                            );
                                        case 'date-picker':
                                            return (
                                                <DatePicker
                                                    className={field?.className}
                                                    picker={field?.picker}
                                                />
                                            );
                                        case 'range-picker':
                                            return (
                                                <DatePicker.RangePicker
                                                    className={field?.className}
                                                    picker={field?.picker}
                                                    showTime={field?.showTime}
                                                />
                                            );
                                        default:
                                            return null;
                                    }
                                })()}
                            </Form.Item>
                        </Col>
                    );
                })}
            </Row>
            <div className="flex justify-end space-x-2">
                <Button
                    icon={<ReloadOutlined />}
                    onClick={() => {
                        router.replace(pathname);
                        setTimeout(() => form.resetFields(), 50);
                    }}
                    type="text"
                >
                    Xóa bộ lọc
                </Button>
                <Button htmlType="submit" type="primary">
                    Tìm kiếm
                </Button>
            </div>
        </Form>
    );
};
