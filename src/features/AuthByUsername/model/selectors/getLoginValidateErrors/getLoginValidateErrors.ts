import { type StateSchema } from '@/app/providers/StoreProvider';

export const getLoginValidateErrors = (state: StateSchema) => state?.loginForm?.validateError || [];
