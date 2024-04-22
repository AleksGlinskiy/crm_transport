import { StateSchema } from '@/app/providers/StoreProvider';

export const getStopoverDetailsData = (state: StateSchema) =>
    state.stopoverDetails?.data;

export const getStopoverDetailsError = (state: StateSchema) =>
    state.stopoverDetails?.errors;

export const getStopoverDetailsIsLoading = (state: StateSchema) =>
    state.stopoverDetails?.isLoading || false;
