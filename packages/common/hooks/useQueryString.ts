import React from 'react';
import { useSearchParams } from 'next/navigation';
import qs from 'qs';
import lodash from 'lodash';
import dayjs from 'dayjs';

interface Params {
    url: string;
    query: Record<string, string | string[]>;
}

const dateFormatPattern = /^\d{4}-\d{2}-\d{2}$/;

export const useQueryString = () => {
    const searchParams = useSearchParams();

    const params = React.useCallback(() => {
        const queryObject = Object.entries(
            qs.parse(
                Object.fromEntries(new URLSearchParams(searchParams.toString()))
            )
        )?.map((item) => {
            if (Array.isArray(item?.[1])) {
                return {
                    [item?.[0]]: item?.[1]?.map((value) => {
                        if (dateFormatPattern.test(value)) {
                            return dayjs(value, 'YYYY-MM-DD');
                        }
                        return value;
                    }),
                };
            }
            if (dateFormatPattern.test(item?.[1] as string)) {
                return {
                    [item?.[0]]: dayjs(item?.[1] as string, 'YYYY-MM-DD'),
                };
            }
            return {
                [item?.[0]]: item?.[1],
            };
        }) as Array<Record<string, string | string[]>>;

        const result =
            queryObject?.length > 0
                ? queryObject?.reduce((acc, curr) => ({
                      ...acc,
                      ...curr,
                  }))
                : {};

        return result;
    }, [searchParams]);

    const pushParams = React.useCallback(
        ({ url, query }: Params) => {
            const parsedQuery = qs.stringify({
                ...lodash.pickBy({
                    ...Object.fromEntries(
                        new URLSearchParams(searchParams.toString())
                    ),
                    ...query,
                }),
            });

            const paramsUrl = `${url}?${parsedQuery}`;

            return paramsUrl;
        },
        [searchParams]
    );

    return { params, pushParams };
};
