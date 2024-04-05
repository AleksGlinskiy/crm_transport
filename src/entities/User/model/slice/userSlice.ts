import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type User, type UserScheme } from '../types/user';
import { USER_AUTH_DATA } from '@/shared/const/const';

const initialState: UserScheme = {
    _inited: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(USER_AUTH_DATA);

            if (user) {
                state.authData = JSON.parse(user);
            }

            state._inited = true;
        },
        logoutAuthData: (state) => {
            localStorage.removeItem(USER_AUTH_DATA);
            state.authData = undefined;
        },
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
