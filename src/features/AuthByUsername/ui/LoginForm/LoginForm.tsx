import { useSelector } from 'react-redux';
import { type SyntheticEvent, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { Button, ButtonVariants } from '@/shared/ui/Button/Button';
import { Message, MessageVariants } from '@/shared/ui/Message/Message';
import { Input } from '@/shared/ui/Input/Input';
import { loginActions } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginLoading } from '../../model/selectors/getLoginLoading/getLoginLoading';
import { getLoginError } from '../../model/selectors/setLoginError/getLoginError';
import { getLoginValidateErrors } from '../../model/selectors/getLoginValidateErrors/getLoginValidateErrors';

import cls from './LoginForm.module.scss';
import { ValidateLoginFormErrors } from '@/features/AuthByUsername/model/types/LoginSchema';

interface LoginFormProps {
    className?: string;
}

export function LoginForm(props: LoginFormProps) {
    const { className } = props;

    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const loading = useSelector(getLoginLoading);
    const error = useSelector(getLoginError);
    const validateErrors = useSelector(getLoginValidateErrors);

    const navigate = useNavigate();

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
        dispatch(loginActions.setValidateError([]));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
        dispatch(loginActions.setValidateError([]));
    }, [dispatch]);

    const onLoginSubmit = useCallback(async (event: SyntheticEvent) => {
        event.preventDefault();

        dispatch(loginActions.setError(''));
        const res = await dispatch(loginByUsername({ username, password }));

        if (res.meta.requestStatus === 'fulfilled') {
            navigate(RoutePath.dashboard);
        }
    }, [dispatch, username, password, navigate]);

    return (
        <form className={classNames(cls.LoginForm, className)} action="/" onSubmit={onLoginSubmit}>
            {error && <Message variant={MessageVariants.ERROR} className={cls.LoginForm__error}>{error}</Message>}
            <Input
                type="text"
                placeholder="Введите Email"
                label="Email"
                onChange={onChangeUsername}
                value={username}
                disabled={loading}
                className={cls.LoginForm__input}
                error={validateErrors.includes(ValidateLoginFormErrors.INCORRECT_EMAIL)}
                errorMessage={
                    validateErrors.includes(ValidateLoginFormErrors.INCORRECT_EMAIL)
                    && 'Некорректный адрес электронной почты'
                }
            />
            <Input
                type="password"
                placeholder="Введите пароль"
                label="Пароль"
                onChange={onChangePassword}
                value={password}
                disabled={loading}
                className={cls.LoginForm__input}
                error={validateErrors.includes(ValidateLoginFormErrors.INCORRECT_PASSWORD)}
                errorMessage={
                    validateErrors.includes(ValidateLoginFormErrors.INCORRECT_PASSWORD)
                    && 'Минимальный пароль 8 симвалов'
                }
            />

            {loading
                ? (<Button className={cls.LoginForm__btn} variant={ButtonVariants.PROCESS}>Загрузка...</Button>)
                : (<Button type="submit" className={cls.LoginForm__btn}>Войти</Button>)}
        </form>
    );
}
