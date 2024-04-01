import { Link } from 'react-router-dom';
import { LoginForm, loginReducer } from '@/features/AuthByUsername';
import useReducerManager from '@/shared/hooks/useReducerManager';
import { Text, TextStyle, TextTag } from '@/shared/ui/Text/Text';

import bgImage from '@/shared/assets/images/bg_2.jpg';
import cls from './AuthPage.module.scss';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { AppImage } from '@/shared/ui/AppImage/AppImage';
import useTitle from '@/shared/hooks/useTitle';

export default function AuthPage() {
    useTitle('Авторизация');
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

                    <LoginForm className={cls.AuthPage__form} />
                </div>
            </div>

            <AppImage src={bgImage} className={cls.AuthPage__bg} />
        </div>
    );
}
