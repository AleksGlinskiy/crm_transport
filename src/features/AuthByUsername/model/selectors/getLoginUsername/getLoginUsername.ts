import {StateSchema} from "app/store/store";

export const getLoginUsername = (state: StateSchema) => state?.loginForm?.username || '';