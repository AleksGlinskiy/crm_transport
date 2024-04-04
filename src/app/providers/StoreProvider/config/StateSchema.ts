import { UserScheme } from '@/entities/User';
import { LoginSchema } from '@/features/AuthByUsername';
import { StopoverScheme } from '@/entities/Stopover';

export interface StateSchema {
    user: UserScheme;
    loginForm?: LoginSchema;
    stopover?: StopoverScheme;
}

export type StateSchemaKey = keyof StateSchema;
