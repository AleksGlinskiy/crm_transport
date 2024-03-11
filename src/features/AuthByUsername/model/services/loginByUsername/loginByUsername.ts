import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { userActions, User } from '@/entities/User';
import { validateLoginForm } from '../validateLoginForm/validateLoginForm';
import { ValidateLoginFormErrors } from '../../types/LoginSchema';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User,
    LoginByUsernameProps,
    { rejectValue: ValidateLoginFormErrors[] }>(
        'login/loginByUsername',
        async (authData, thunkAPI) => {
            const errors = validateLoginForm(authData);

            if (errors.length) {
                return thunkAPI.rejectWithValue(errors);
            }

            try {
                const response = await axios.post<User>('http://localhost:8000/login', authData);

                if (!response.data) {
                    throw new Error();
                }

                localStorage.setItem('user', JSON.stringify(response.data));
                thunkAPI.dispatch(userActions.setAuthData(response.data));

                return response.data;
            } catch (e) {
                console.error(e);
                return thunkAPI.rejectWithValue([ValidateLoginFormErrors.INCORRECT_DATA]);
            }
        },
    );
