import { Link } from 'react-router-dom';
import { LoginForm, loginReducer } from '@/features/AuthByUsername';
import useReducerManager from '@/shared/hooks/useReducerManager';
import { Text, TextStyle, TextTag } from '@/shared/ui/Text/Text';

import bgImage from '@/shared/assets/images/bg_2.jpg';
import cls from './AuthPage.module.scss';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';

export default function AuthPage() {
    useReducerManager('loginForm', loginReducer);

    return (
        <div className={cls.AuthPage}>
            <div className={cls.AuthPage__content}>
                <div className={cls.AuthPage__content_wrap}>
                    <Text
                        className={cls.AuthPage__content_title}
                        tag={TextTag.H1}
                        style={TextStyle.H1}
                    >
                        Добро пожаловать! В&nbsp;TManager
                    </Text>
                    <Text className={cls.AuthPage__content_desc}>
                        У вас нет аккаунта?
                        <Link to={RoutePath.registration}>Зарегистрироваться</Link>
                    </Text>

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
