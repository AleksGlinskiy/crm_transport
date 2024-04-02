export enum LoginFormErrors {
    INCORRECT_EMAIL = 'INCORRECT_EMAIL',
    INCORRECT_PASSWORD = 'INCORRECT_PASSWORD',
    INCORRECT_DATA = 'INCORRECT_DATA',
}

export interface LoginSchema {
    username: string;
    password: string;
    isLoading: boolean;
    errors?: LoginFormErrors[];
}
