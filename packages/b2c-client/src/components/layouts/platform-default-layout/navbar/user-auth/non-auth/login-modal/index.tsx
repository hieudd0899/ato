'use client';

import { Button, Modal } from 'antd';
import React from 'react';
import { useLoginModal } from '~/store/use-login-modal';
import { LoginForm } from './login-form';

export const LoginModal = () => {
    const { isOpen, onOpen, onClose } = useLoginModal();

    return (
        <>
            <Button onClick={onOpen} shape="round" size="large" type="primary">
                Đăng nhập
            </Button>
            <Modal centered footer={null} onCancel={onClose} open={isOpen}>
                <LoginForm />
            </Modal>
        </>
    );
};
