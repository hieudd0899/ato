'use client';

import { ConfigProvider } from 'antd';
import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import vi from 'antd/locale/vi_VN';
import { PRIMARY_COLOR } from '../constants/colors';

export const AntdConfigProvider: React.FC<React.PropsWithChildren> = ({
    children,
}) => {
    return (
        <ConfigProvider
            form={{
                validateMessages: {
                    // eslint-disable-next-line no-template-curly-in-string
                    required: 'Vui lòng nhập ${label}.',
                },
            }}
            locale={vi}
            rate={{
                style: {
                    color: PRIMARY_COLOR,
                },
            }}
            spin={{
                indicator: <LoadingOutlined style={{ fontSize: 24 }} />,
            }}
            theme={{
                components: {
                    Button: {
                        colorPrimary: PRIMARY_COLOR,
                        algorithm: true,
                    },
                    Input: {
                        colorPrimary: PRIMARY_COLOR,
                        algorithm: true,
                    },
                    Spin: {
                        colorPrimary: PRIMARY_COLOR,
                    },
                    Select: {
                        colorPrimary: PRIMARY_COLOR,
                        algorithm: true,
                    },
                    DatePicker: {
                        colorPrimary: PRIMARY_COLOR,
                        algorithm: true,
                    },
                    Checkbox: {
                        colorPrimary: PRIMARY_COLOR,
                        algorithm: true,
                    },
                    Switch: {
                        colorPrimary: PRIMARY_COLOR,
                        algorithm: true,
                    },
                    Radio: {
                        colorPrimary: PRIMARY_COLOR,
                        algorithm: true,
                    },
                    Pagination: {
                        colorPrimary: PRIMARY_COLOR,
                        algorithm: true,
                    },
                    Tabs: {
                        colorPrimary: PRIMARY_COLOR,
                        algorithm: true,
                    },
                },
            }}
        >
            {children}
        </ConfigProvider>
    );
};
