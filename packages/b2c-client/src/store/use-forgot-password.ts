import { create } from 'zustand';

export enum STEP {
    SEND_EMAIL,
    OTP,
    CHANGE_PASSWORD,
}

type State = {
    step: STEP;
};

type Actions = {
    setStep: (payload: STEP) => void;
};

export const useForgetPassword = create<State & Actions>((set) => ({
    step: STEP.SEND_EMAIL,
    setStep: (payload) => set(() => ({ step: payload })),
}));
