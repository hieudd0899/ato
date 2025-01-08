'use client';

import React from 'react';
import { Test } from 'common/components/test';
import { Button, Input } from 'antd';

const Home = () => {
    return (
        <div>
            <Test />
            <Button type="primary">Test</Button>
            <Input />
        </div>
    );
};

export default Home;
