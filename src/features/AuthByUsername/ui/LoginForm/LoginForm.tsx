import { useSelector } from 'react-redux';
import { type SyntheticEvent, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { Button, ButtonVariants } from '@/shared/ui/Button/Button';
import { Message, MessageVariants } from '@/shared/ui/Message/Message';
import { Input } from '@/shared/ui/Input/Input';
import { loginActions } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginLoading } from '../../model/selectors/getLoginLoading/getLoginLoading';
import { getLoginErrors } from '../../model/selectors/setLoginErrors/getLoginErrors';

import cls from './LoginForm.module.scss';
import { LoginFormErrors } from '../../model/types/LoginSchema';

interface LoginFormProps {
    className?: string;
}

export function LoginForm(props: LoginFormProps) {
    const { className } = props;

    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const loading = useSelector(getLoginLoading);
    const errors = useSelector(getLoginErrors);

    const navigate = useNavigate();

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
            dispatch(
                loginActions.setErrors(
                    errors.filter(
                        (item) => item !== LoginFormErrors.INCORRECT_EMAIL,
                    ),
                ),
            );
        },
        [dispatch, errors],
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
            dispatch(
                loginActions.setErrors(
                    errors.filter(
                        (item) => item !== LoginFormErrors.INCORRECT_PASSWORD,
                    ),
                ),
            );
        },
        [dispatch, errors],
    );

    const onLoginSubmit = useCallback(
        async (event: SyntheticEvent) => {
            event.preventDefault();

            dispatch(loginActions.setErrors([]));

            const res = await dispatch(loginByUsername({ username, password }));

            if (res && res.meta?.requestStatus === 'fulfilled') {
                navigate(RoutePath.dashboard);
            }
        },
        [dispatch, username, password, navigate],
    );

    const errorEmail = errors.includes(LoginFormErrors.INCORRECT_EMAIL)
        ? 'Некорректный Логин или Email'
        : '';

    const errorPassword = errors.includes(LoginFormErrors.INCORRECT_PASSWORD)
        ? 'Минимальный пароль 8 симвалов'
        : '';

    return (
        <form
            className={classNames(cls.LoginForm, className)}
            action='/'
            onSubmit={onLoginSubmit}
        >
            {errors.includes(LoginFormErrors.INCORRECT_DATA) && (
                <Message
                    variant={MessageVariants.ERROR}
                    className={cls.LoginForm__error}
                >
                    Неправильный логин или пароль
                </Message>
            )}

            <Input
                type='text'
                placeholder='Введите Логин или Email'
                label='Логин'
                onChange={onChangeUsername}
                value={username}
                disabled={loading}
                className={cls.LoginForm__input}
                error={errors.includes(LoginFormErrors.INCORRECT_EMAIL)}
                errorMessage={errorEmail}
            />
            <Input
                type='password'
                placeholder='Введите пароль'
                label='Пароль'
                onChange={onChangePassword}
                value={password}
                disabled={loading}
                className={cls.LoginForm__input}
                error={errors.includes(LoginFormErrors.INCORRECT_PASSWORD)}
                errorMessage={errorPassword}
            />

            {loading ? (
                <Button
                    className={cls.LoginForm__btn}
                    variant={ButtonVariants.PROCESS}
                >
                    Загрузка...
                </Button>
            ) : (
                <Button type='submit' className={cls.LoginForm__btn}>
                    Войти
                </Button>
            )}
        </form>
    );
}
