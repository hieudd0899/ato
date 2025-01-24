'use client';

import { Button, Drawer } from 'antd';
import { MenuIcon } from 'lucide-react';
import React from 'react';
import { Logo } from '../logo';
import { Menu } from '../menu';

export const MobileMenu = () => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);

    return (
        <div>
            <Button
                icon={<MenuIcon />}
                onClick={() => {
                    setIsOpen(true);
                }}
                type="text"
            />
            <Drawer
                closable={false}
                onClick={() => setIsOpen(false)}
                onClose={() => {
                    setIsOpen(false);
                }}
                open={isOpen}
                placement="left"
                title={<Logo />}
            >
                <Menu className="flex flex-col space-x-0 space-y-2" />
            </Drawer>
        </div>
    );
};
