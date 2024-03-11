import { ActionReducerMapBuilder, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { loginByUsername } from '../services/loginByUsername/loginByUsername';
import { type LoginSchema, ValidateLoginFormErrors } from '../types/LoginSchema';

const initialState: LoginSchema = {
    isLoading: false,
    username: '',
    password: '',
    validateError: [],
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
        setError: (state: LoginSchema, action: PayloadAction<string>) => {
            state.error = action.payload;
        },
        setValidateError: (state: LoginSchema, action: PayloadAction<ValidateLoginFormErrors[]>) => {
            state.validateError = action.payload;
        },
    },
    extraReducers: (builder: ActionReducerMapBuilder<LoginSchema>) => {
        builder
            .addCase(loginByUsername.pending, (state) => {
                state.isLoading = true;
                state.validateError = [];
            })
            .addCase(loginByUsername.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(loginByUsername.rejected, (state, action) => {
                state.isLoading = false;
                state.error = 'Неверный логин или пароль';
                state.validateError = action.payload;
            });
    },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
