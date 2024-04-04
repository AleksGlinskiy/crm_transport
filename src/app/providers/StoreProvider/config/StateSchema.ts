import { AxiosInstance } from 'axios';
import { UserScheme } from '@/entities/User';
import { LoginSchema } from '@/features/AuthByUsername';
import { StopoverScheme } from '@/entities/Stopover';

export interface StateSchema {
    user: UserScheme;

    // async reducers
    loginForm?: LoginSchema;
    stopover?: StopoverScheme;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
}

export type StateSchemaKey = keyof StateSchema;
