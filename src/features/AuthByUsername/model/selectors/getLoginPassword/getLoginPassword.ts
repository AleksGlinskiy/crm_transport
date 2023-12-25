import {StateSchema} from "app/store/store";

export const getLoginPassword = (state: StateSchema) => state?.loginForm?.password;