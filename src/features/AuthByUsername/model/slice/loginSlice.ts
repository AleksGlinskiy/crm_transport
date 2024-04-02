import {
    ActionReducerMapBuilder,
    createSlice,
    type PayloadAction,
} from '@reduxjs/toolkit';
import { loginByUsername } from '../services/loginByUsername/loginByUsername';
import { LoginFormErrors, type LoginSchema } from '../types/LoginSchema';

const initialState: LoginSchema = {
    isLoading: false,
    username: '',
    password: '',
    errors: [],
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state: LoginSchema, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state: LoginSchema, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
        setErrors: (
            state: LoginSchema,
            action: PayloadAction<LoginFormErrors[]>,
        ) => {
            state.errors = action.payload;
        },
    },
    extraReducers: (builder: ActionReducerMapBuilder<LoginSchema>) => {
        builder
            .addCase(loginByUsername.pending, (state) => {
                state.isLoading = true;
                state.errors = [];
            })
            .addCase(loginByUsername.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(loginByUsername.rejected, (state, action) => {
                state.isLoading = false;
                state.errors = action.payload;
            });
    },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
