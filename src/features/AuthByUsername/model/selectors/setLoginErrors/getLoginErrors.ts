import { type StateSchema } from '@/app/providers/StoreProvider';

export const getLoginErrors = (state: StateSchema) =>
    state?.loginForm?.errors || [];
