import bgImage from '@/shared/assets/images/bg_2.jpg';
import { LoginForm, loginReducer } from '@/features/AuthByUsername';
import useReducerManager from '@/shared/hooks/useReducerManager';
import cls from './AuthPage.module.scss';

export default function AuthPage() {
    useReducerManager('loginForm', loginReducer);

    return (
        <div className={cls.AuthPage}>
            <div className={cls.AuthPage__content}>
                <div className={cls.AuthPage__content_wrap}>
                    <h1>Добро пожаловать! В&nbsp;TManager</h1>
                    <p>
                        У вас нет аккаунта?
                        <a href="/">Зарегистрироваться</a>
                    </p>
                    <LoginForm />
                </div>
            </div>
            <figure className={cls.AuthPage__bg}>
                <picture className={cls.AuthPage__pic}>
                    <img src={bgImage} alt="Auth" className={cls.AuthPage__img} />
                </picture>
            </figure>
        </div>
    );
}
