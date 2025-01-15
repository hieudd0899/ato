'use client';

import React, { Suspense, useState } from 'react';
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
    Tabs,
} from 'antd';

import { FilterContainer } from '~/components/common/filter-container';
import { Table } from '~/components/common/table';

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
        <Suspense fallback={<div>Loading...</div>}>
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

                <div className="container rounded-md border p-4">
                    <FilterContainer
                        items={[
                            {
                                name: 'testText',
                                label: 'Text',
                                type: 'text',
                            },
                            {
                                name: 'testSelect',
                                label: 'Select',
                                type: 'select',
                                options: [
                                    { value: 'option 1', label: 'option 1' },
                                    { value: 'option 2', label: 'option 2' },
                                    { value: 'option 3', label: 'option 3' },
                                ],
                                showSearch: true,
                            },

                            {
                                name: 'testRangePicker',
                                label: 'Range Picker',
                                type: 'range-picker',
                                className: 'w-full',
                                showTime: true,
                            },
                            {
                                name: 'testDatePicker',
                                label: 'Date Picker',
                                type: 'date-picker',
                                className: 'w-full',
                            },
                        ]}
                    />
                </div>
                <div className="container flex flex-col space-y-2">
                    <Rate allowHalf defaultValue={4} />
                    <Select options={[]} />
                    <DatePicker />
                    <Checkbox>Test</Checkbox>
                    <div>
                        <Switch />
                    </div>
                    <Radio>Test</Radio>
                    <Pagination total={100} />
                    <Table
                        columns={[
                            { title: 'ID' },
                            { title: 'Name' },
                            { title: 'Description' },
                            { title: 'Actions' },
                        ]}
                        dataSource={[]}
                        pagination={{
                            total: 100,
                        }}
                    />
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
        </Suspense>
    );
};

export default Home;
