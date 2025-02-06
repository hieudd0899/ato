'use client';

import React, { PropsWithChildren } from 'react';

import { cn } from 'common/utils';

type Props = PropsWithChildren & {
    onClick?: () => void;
    icon: React.ReactNode;
    className?: string;
};

export const AnimateButton: React.FC<Props> = ({
    icon,
    children,
    onClick,
    className,
}) => {
    return (
        <button
            className={cn(
                'group/modal-btn relative flex justify-center overflow-hidden rounded-md bg-neutral-900 px-4 py-2 text-center text-white',
                className
            )}
            onClick={onClick}
            type="button"
        >
            <span className="text-center transition duration-500 group-hover/modal-btn:translate-x-40">
                {children}
            </span>
            <div className="absolute inset-0 z-20 flex -translate-x-40 items-center justify-center text-white transition duration-500 group-hover/modal-btn:translate-x-0">
                {icon}
            </div>
        </button>
    );
};
