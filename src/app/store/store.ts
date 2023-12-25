import {configureStore} from "@reduxjs/toolkit";
import {userReducer} from "entities/User/model/slice/userSlice";
import {loginReducer} from "features/AuthByUsername/model/slice/loginSlice";
import {LoginSchema} from "features/AuthByUsername/model/types/LoginSchema";
import {UserScheme} from "entities/User/model/types/user";

export interface StateSchema {
    user: UserScheme;
    loginForm?: LoginSchema;
}

export function createReduxStore() {
    const store = configureStore({
        reducer: {
            user: userReducer,
            loginForm: loginReducer,
        }
    })

    return store;
}

