import { ValidateLoginFormErrors } from '@/features/AuthByUsername/model/types/LoginSchema';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const validateLoginForm = (loginData: LoginByUsernameProps) => {
    const { username, password } = loginData;
    const errors = [];

    if (username.length <= 3) {
        errors.push(ValidateLoginFormErrors.INCORRECT_EMAIL);
    }

    if (password.length < 8) {
        errors.push(ValidateLoginFormErrors.INCORRECT_PASSWORD);
    }

    return errors;
};
