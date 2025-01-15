'use client';

import { ReloadOutlined } from '@ant-design/icons';
import {
    Button,
    Col,
    ColProps,
    DatePicker,
    DatePickerProps,
    Form,
    FormProps,
    Input,
    Row,
    Select,
    SelectProps,
} from 'antd';
import { Rule } from 'antd/lib/form';
import { FormLayout } from 'antd/lib/form/Form';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { useQueryString } from 'common/hooks/useQueryString';
import dayjs from 'dayjs';
import { mapArrayUseIndex } from 'common/utils/mapArrayUseIndex';
import { RangePickerProps } from 'antd/lib/date-picker';

type FilterItemBase = {
    name: string;
    label: string;
    placeholder?: string;
    rules?: Rule[];
    className?: string;
    col?: Pick<ColProps, 'span' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'>;
};

type TextField = FilterItemBase & {
    type: 'text';
};

type SelectField = FilterItemBase &
    Pick<SelectProps, 'options' | 'showSearch'> & {
        type: 'select';
    };

type DatePickerField = FilterItemBase &
    Pick<DatePickerProps, 'showTime' | 'picker'> & {
        type: 'date-picker';
    };

type RangePickerField = Omit<FilterItemBase, 'placeholder'> &
    Pick<RangePickerProps, 'showTime' | 'placeholder' | 'picker'> & {
        type: 'range-picker';
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
    const { params, pushParams, replaceParams } = useQueryString();

    const onFinish: FormProps<Record<string, string>>['onFinish'] = (
        values
    ) => {
        const queryObject = (
            Object.entries(values)?.map((item) => {
                if (Array.isArray(item?.[1])) {
                    return {
                        [item[0]]: item?.[1]?.map((itemValue) => {
                            if (dayjs.isDayjs(itemValue)) {
                                return dayjs(itemValue).toISOString();
                            }
                            return item.values;
                        }),
                    };
                }
                if (dayjs.isDayjs(item?.[1])) {
                    return {
                        [item?.[0]]: dayjs(item?.[1]).toISOString(),
                    };
                }
                return { [item?.[0]]: item?.[1] };
            }) as Array<Record<string, string | string[]>>
        ).reduce((acc, curr) => ({ ...acc, ...curr }));

        router.replace(
            pushParams({
                url: pathname,
                query: queryObject,
            })
        );
    };

    return (
        <Form
            form={form}
            initialValues={params}
            layout={layout}
            onFinish={onFinish}
        >
            <Row gutter={16}>
                {mapArrayUseIndex(items, ({ key, value: field }) => {
                    const colProps = field?.col ?? {};
                    return (
                        <Col className="gutter-row" key={key} {...colProps}>
                            <Form.Item
                                label={field?.label}
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
                                                    placeholder={
                                                        field?.placeholder
                                                    }
                                                    showTime={field?.showTime}
                                                />
                                            );
                                        case 'range-picker':
                                            return (
                                                <DatePicker.RangePicker
                                                    className={field?.className}
                                                    picker={field?.picker}
                                                    placeholder={
                                                        field?.placeholder
                                                    }
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
                        if (params?.pageSize && params?.current) {
                            router.replace(
                                replaceParams({
                                    url: pathname,
                                    query: {
                                        current: 1,
                                        pageSize: params?.pageSize,
                                    },
                                })
                            );
                        } else {
                            router.replace(pathname);
                        }
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
