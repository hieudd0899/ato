'use client';

import { useEffect, useState } from 'react';

export const useDebounceValue = <T,>(value: T, delay = 500) => {
    const [debounceValue, setDebounceValue] = useState<T>(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceValue(value);
        }, delay);

        return () => clearTimeout(handler);
    }, [value, delay]);

    return debounceValue;
};
