'use client';

import React, { useState } from 'react';
import { Test } from 'common/components/test';
import {
    Button,
    Checkbox,
    DatePicker,
    Input,
    Modal,
    Pagination,
    Radio,
    Rate,
    Select,
    Switch,
    Table,
    Tabs,
} from 'antd';

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <div>
            <Test />
            <Button type="primary">Test</Button>
            <Input />
            <Button onClick={showModal} type="primary">
                Open Modal
            </Button>
            <Modal
                onCancel={handleCancel}
                onOk={handleOk}
                open={isModalOpen}
                title="Basic Modal"
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
            <div className="container flex flex-col space-y-2">
                <Rate allowHalf value={4} />
                <Select options={[]} />
                <DatePicker />
                <Checkbox>Test</Checkbox>
                <div>
                    <Switch />
                </div>
                <Radio>Test</Radio>
                <Pagination total={100} />
                <Table dataSource={[]} />
                <Tabs
                    items={[
                        {
                            key: '1',
                            label: 'Tab 1',
                            children: 'Content of Tab Pane 1',
                        },
                        {
                            key: '2',
                            label: 'Tab 2',
                            children: 'Content of Tab Pane 2',
                        },
                        {
                            key: '3',
                            label: 'Tab 3',
                            children: 'Content of Tab Pane 3',
                        },
                    ]}
                />
            </div>
        </div>
    );
};

export default Home;
