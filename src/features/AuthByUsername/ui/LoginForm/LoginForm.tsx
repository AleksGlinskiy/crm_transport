import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { Button } from '@/shared/ui/Button/Button';
import { Message, MessageVariants } from '@/shared/ui/Message/Message';
import { Input } from '@/shared/ui/Input/Input';
import { loginActions } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginLoading } from '../../model/selectors/getLoginLoading/getLoginLoading';
import { getLoginErrors } from '../../model/selectors/setLoginErrors/getLoginErrors';
import { VStack } from '@/shared/ui/Stack';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

type FormInputs = {
    login: string;
    password: string;
};

type onChangeType = (
    event: unknown,
    onChange: (event: unknown) => void,
    value: string,
) => void;

export function LoginForm(props: LoginFormProps) {
    const { className } = props;

    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const loading = useSelector(getLoginLoading);
    const errorsRequest = useSelector(getLoginErrors);
    const navigate = useNavigate();

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormInputs>();

    const onChangeUsername: onChangeType = (event, onChange, value) => {
        dispatch(loginActions.setUsername(value));
        onChange(event);
    };

    const onChangePassword: onChangeType = (event, onChange, value) => {
        dispatch(loginActions.setPassword(value));
        onChange(event);
    };

    const onSubmit: SubmitHandler<FormInputs> = async () => {
        const res = await dispatch(loginByUsername({ username, password }));

        if (res && res.meta?.requestStatus === 'fulfilled') {
            navigate(RoutePath.dashboard);
        }
    };

    const passwordErrorMessage =
        errors?.password && errors?.password?.type === 'minLength'
            ? 'Минимальный пароль 8 симвалов'
            : errors?.password?.message;

    return (
        <form
            className={classNames(cls.LoginForm, className)}
            action='/'
            onSubmit={handleSubmit(onSubmit)}
        >
            <VStack gap='16'>
                {errorsRequest.length > 0 && (
                    <Message
                        variant={MessageVariants.ERROR}
                        className={cls.LoginForm__error}
                    >
                        Неправильный логин или пароль
                    </Message>
                )}

                <Controller
                    name='login'
                    control={control}
                    defaultValue=''
                    rules={{ required: 'Это поле обязательно' }}
                    render={({ field }) => (
                        <Input
                            type='text'
                            placeholder='Введите логин'
                            label='Логин'
                            disabled={loading}
                            error={Boolean(errors.login)}
                            errorMessage={errors?.login?.message}
                            {...field}
                            onChange={(e) => {
                                onChangeUsername(
                                    e,
                                    field.onChange,
                                    field.value,
                                );
                            }}
                        />
                    )}
                />

                <Controller
                    name='password'
                    control={control}
                    defaultValue=''
                    rules={{
                        required: 'Это поле обязательно',
                        minLength: 8,
                    }}
                    render={({ field }) => (
                        <Input
                            type='password'
                            placeholder='Введите пароль'
                            label='Пароль'
                            disabled={loading}
                            error={Boolean(errors.password)}
                            errorMessage={passwordErrorMessage}
                            {...field}
                            onChange={(e) => {
                                onChangePassword(
                                    e,
                                    field.onChange,
                                    field.value,
                                );
                            }}
                        />
                    )}
                />
            </VStack>

            {loading ? (
                <Button className={cls.LoginForm__btn} loading>
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
