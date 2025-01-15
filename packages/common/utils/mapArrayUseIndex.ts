interface AddedKeyArray<T> {
    value: T;
    key: number | string;
}

type Callback<T, U> = (
    item: AddedKeyArray<T>,
    index: number | string,
    array: Array<AddedKeyArray<T>>
) => U;

export function mapArrayUseIndex<T, U>(array: T[], callback: Callback<T, U>) {
    const addedKeyArray = array?.map((item, index) => ({
        value: item,
        key: index,
    }));
    return addedKeyArray?.map(callback);
}
