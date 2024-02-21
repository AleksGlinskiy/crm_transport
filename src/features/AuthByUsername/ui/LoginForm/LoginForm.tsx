import { useSelector } from 'react-redux';
import { type SyntheticEvent, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { Button } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';
import { loginActions } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginLoading } from '../../model/selectors/getLoginLoading/getLoginLoading';

import cls from './LoginForm.module.scss';

export function LoginForm() {
    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const loading = useSelector(getLoginLoading);

    const navigate = useNavigate();

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginSubmit = useCallback(async (event: SyntheticEvent) => {
        event.preventDefault();

        const res = await dispatch(loginByUsername({ username, password }));

        if (res.meta.requestStatus === 'fulfilled') {
            navigate(RoutePath.dashboard);
        }
    }, [dispatch, username, password, navigate]);

    return (
        <form action="/" onSubmit={onLoginSubmit}>
            <Input
                type="text"
                placeholder="Введите логин или Email"
                label="Логин"
                onChange={onChangeUsername}
                value={username}
                required
                disabled={loading}
            />
            <Input
                type="password"
                placeholder="Введите пароль"
                label="Пароль"
                onChange={onChangePassword}
                value={password}
                required
                disabled={loading}
            />
            <Button
                type="submit"
                disabled={loading}
                className={cls.LoginForm__btn}
            >
                {loading ? 'Загрузка...' : 'Войти'}
            </Button>
        </form>
    );
}
