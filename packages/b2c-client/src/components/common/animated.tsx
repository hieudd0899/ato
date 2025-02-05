'use client';

import React from 'react';

import { cn } from 'common/utils';
import { useInView } from 'react-intersection-observer';

type Props = React.PropsWithChildren & {
    className?: string;
    tag?: 'span' | 'div' | 'p' | 'h1' | 'h2' | 'h3';
    type?: 'fade-down' | 'fade-up' | 'fade-left' | 'fade-right';
};

export const Animated: React.FC<Props> = ({
    children,
    className,
    tag = 'div',
    type,
}) => {
    const Comp = tag;

    const { ref, inView } = useInView();

    const [isInViewed, setIsInViewed] = React.useState<boolean>(false);

    React.useEffect(() => {
        if (inView) {
            setIsInViewed(true);
        }
    }, [inView]);

    const animated = React.useMemo(() => {
        switch (type) {
            case 'fade-up':
                return 'animate-fade-up';
            case 'fade-down':
                return 'animate-fade-down';
            case 'fade-left':
                return 'animate-fade-left';
            case 'fade-right':
                return 'animate-fade-right';
            default:
                return 'animate-fade';
        }
    }, [type]);

    return (
        <Comp
            className={cn(
                'animate-duration-1000 animate-delay-200',
                animated,
                isInViewed ? 'animate-ease-out' : 'opacity-0',
                isInViewed && className && className
            )}
            ref={ref}
        >
            {children}
        </Comp>
    );
};
