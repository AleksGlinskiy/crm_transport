import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { userActions, User } from '@/entities/User';
import { validateLoginForm } from '../validateLoginForm/validateLoginForm';
import { LoginFormErrors } from '../../types/LoginSchema';
import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema';
import { USER_AUTH_DATA } from '@/shared/const/const';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    ThunkConfig<LoginFormErrors[]>
>('login/loginByUsername', async (authData, thunkAPI) => {
    const { dispatch, rejectWithValue, extra } = thunkAPI;

    try {
        const response = await extra.api.post<User>('login', authData);

        if (!response.data) {
            throw new Error();
        }

        localStorage.setItem(USER_AUTH_DATA, JSON.stringify(response.data));
        dispatch(userActions.setAuthData(response.data));

        return response.data;
    } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
        return rejectWithValue([LoginFormErrors.INCORRECT_DATA]);
    }
});
