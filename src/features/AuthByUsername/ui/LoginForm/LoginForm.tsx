import {Input} from "shared/ui/Input/Input";
import {Button} from "shared/ui/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {loginActions} from "../../model/slice/loginSlice";
import {SyntheticEvent, useCallback} from "react";
import {getLoginUsername} from "../../model/selectors/getLoginUsername/getLoginUsername";
import {getLoginPassword} from "../../model/selectors/getLoginPassword/getLoginPassword";
import {useNavigate} from "react-router-dom";

export function LoginForm() {
    const dispatch = useDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);

    const navigate = useNavigate();

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginSubmit = useCallback((event: SyntheticEvent) => {
        event.preventDefault();

        navigate('/');
    }, []);

    return (
        <form action="/" onSubmit={onLoginSubmit}>
            <Input
                type="text"
                placeholder="Логин"
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                type="password"
                placeholder="Пароль"
                onChange={onChangePassword}
                value={password}
            />
            <Button>Войти</Button>
        </form>
    )
}