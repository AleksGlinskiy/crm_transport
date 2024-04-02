import { type SyntheticEvent, useCallback } from 'react';
import classNames from 'classnames';
import { Button } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';
import cls from './RegistrationForm.module.scss';

interface RegistrationFormProps {
    className?: string;
}

export function RegistrationForm(props: RegistrationFormProps) {
    const { className } = props;

    const onLoginSubmit = useCallback(async (event: SyntheticEvent) => {
        event.preventDefault();
    }, []);

    return (
        <form
            className={classNames(cls.RegistrationForm, className)}
            action='/'
            onSubmit={onLoginSubmit}
        >
            <Input
                type='text'
                placeholder='Введите Email'
                label='Email'
                className={cls.RegistrationForm__input}
            />

            <Input
                type='password'
                placeholder='Введите Пароль'
                label='Пароль'
                className={cls.RegistrationForm__input}
            />

            <Input
                type='password'
                placeholder='Повторите Пароль'
                label='Подтвердить Пароль'
                className={cls.RegistrationForm__input}
            />

            <Button type='submit' className={cls.RegistrationForm__btn}>
                Зарегистрироваться
            </Button>
        </form>
    );
}
