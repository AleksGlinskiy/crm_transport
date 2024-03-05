import { Link } from 'react-router-dom';
import { Text, TextStyle, TextTag } from '@/shared/ui/Text/Text';
import cls from './RegistrationPage.module.scss';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { LoginForm } from '@/features/AuthByUsername';
import bgImage from '@/shared/assets/images/bg_2.jpg';

export default function RegistrationPage() {
    return (
        <div className={cls.RegistrationPage}>
            <div className={cls.RegistrationPage__content}>
                <div className={cls.RegistrationPage__content_wrap}>
                    <Text
                        className={cls.RegistrationPage__content_title}
                        tag={TextTag.H1}
                        style={TextStyle.H1}
                    >
                        Добро пожаловать! В&nbsp;TManager
                    </Text>
                    <Text className={cls.RegistrationPage__content_desc}>
                        Есть аккаунта?
                        <Link to={RoutePath.login}>Войти</Link>
                    </Text>

                    <LoginForm />
                </div>
            </div>
            <figure className={cls.RegistrationPage__bg}>
                <picture className={cls.RegistrationPage__pic}>
                    <img src={bgImage} alt="Auth" className={cls.RegistrationPage__img} />
                </picture>
            </figure>
        </div>
    );
}
