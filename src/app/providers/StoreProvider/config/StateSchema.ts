import { UserScheme } from '@/entities/User';
import { LoginSchema } from '@/features/AuthByUsername';

export interface StateSchema {
    user: UserScheme;
    loginForm?: LoginSchema;
}

export type StateSchemaKey = keyof StateSchema;
