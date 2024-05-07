import { StateSchema } from '@/app/providers/StoreProvider';

export const getStopoverDetailsData = (state: StateSchema) =>
    state.stopoverDetails?.data;

export const getStopoverDetailsError = (state: StateSchema) =>
    state.stopoverDetails?.errors;

export const getStopoverDetailsIsLoading = (state: StateSchema) =>
    state.stopoverDetails?.isLoading || false;

export const getStopoverDetailsReadonly = (state: StateSchema) =>
    state.stopoverDetails?.readonly || false;

export const getStopoverDetailsForm = (state: StateSchema) =>
    state.stopoverDetails?.form;

export const getStopoverDetailsFormIsLoading = (state: StateSchema) =>
    state.stopoverDetails?.formIsLoading;
