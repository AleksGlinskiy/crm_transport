import bg_image from '../assets/bg.jpg';
import cls from './AuthPage.module.scss';
import {LoginForm} from "features/AuthByUsername";

export function AuthPage() {
    return (
        <div className={cls.AuthPage}>
            <div className={cls.AuthPage__content}>
                <div className={cls.AuthPage__content_wrap}>
                    <h1>Добро пожаловать! <br />В TManager</h1>
                    <p>У вас нет аккаунта? <a href="/">Зарегистрироваться</a></p>

                    <LoginForm />
                </div>
            </div>
            <figure className={cls.AuthPage__bg}>
                <picture className={cls.AuthPage__pic}>
                    <img src={bg_image} alt="Auth" className={cls.AuthPage__img}/>
                </picture>
            </figure>
        </div>
    )
}