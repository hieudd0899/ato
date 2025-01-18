'use client';

import { Button, Modal } from 'antd';
import React from 'react';
import { useRegisterModal } from '~/store/use-register-modal';

export const RegisterModal = () => {
    const { isOpen, onClose, onOpen } = useRegisterModal();

    return (
        <>
            <Button onClick={onOpen} shape="round" size="large" type="text">
                Đăng ký
            </Button>
            <Modal centered footer={null} onCancel={onClose} open={isOpen}>
                Register Modal
            </Modal>
        </>
    );
};
