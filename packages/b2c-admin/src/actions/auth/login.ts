'use server';

export type LoginFormType = {
    username: string;
    password: string;
};

export const loginAction = async (payload: LoginFormType) => {
    // eslint-disable-next-line no-console
    console.log(payload);
};
