import {Input} from "shared/ui/Input/Input";
import {Button} from "shared/ui/Button/Button";

export function LoginForm() {
    return (
        <form action="/">
            <Input type="text" placeholder="Логин" />
            <Input type="password" placeholder="Пароль" />
            <Button>Войти</Button>
        </form>
    )
}