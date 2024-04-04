import { type StateSchema } from '@/app/providers/StoreProvider';

export const getStopoverData = (state: StateSchema) => state?.stopover?.data;
export const getStopoverLoading = (state: StateSchema) =>
    state?.stopover?.isLoading;
export const getStopoverError = (state: StateSchema) => state?.stopover?.errors;
