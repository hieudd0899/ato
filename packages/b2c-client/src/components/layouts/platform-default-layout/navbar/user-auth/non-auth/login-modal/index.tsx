'use client';

import React from 'react';

import { Button, Modal } from 'antd';

import { LoginForm } from './login-form';
import { useLoginModal } from '~/store/use-login-modal';

export const LoginModal = () => {
    const { isOpen, onOpen, onClose } = useLoginModal();

    return (
        <>
            <Button
                color="default"
                onClick={onOpen}
                type="primary"
                variant="solid"
            >
                Đăng nhập
            </Button>
            <Modal centered footer={null} onCancel={onClose} open={isOpen}>
                <LoginForm />
            </Modal>
        </>
    );
};
