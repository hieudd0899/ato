'use client';

import { ConfigProvider } from 'antd';
import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
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
                },
            }}
        >
            {children}
        </ConfigProvider>
    );
};
