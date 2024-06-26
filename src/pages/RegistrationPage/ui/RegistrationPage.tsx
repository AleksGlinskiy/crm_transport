import { Link } from 'react-router-dom';
import { Text, TextStyle, TextTag } from '@/shared/ui/Text/Text';
import cls from './RegistrationPage.module.scss';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import bgImage from '@/shared/assets/images/bg_3.jpg';
import useTitle from '@/shared/lib/hooks/useTitle';
import { RegistrationForm } from '@/features/Registration';
import { AppImage } from '@/shared/ui/AppImage/AppImage';

export default function RegistrationPage() {
    useTitle('Регистрация');

    return (
        <div className={cls.RegistrationPage}>
            <div className={cls.RegistrationPage__content}>
                <div className={cls.RegistrationPage__content_wrap}>
                    <Text
                        className={cls.RegistrationPage__content_title}
                        tag={TextTag.H1}
                        style={TextStyle.H1}
                    >
                        Регистрация В&nbsp;TManager
                    </Text>

                    <Text className={cls.RegistrationPage__content_desc}>
                        Есть аккаунта?
                        <Link to={RoutePath.login}>Войти</Link>
                    </Text>

                    <RegistrationForm className={cls.RegistrationPage__form} />
                </div>
            </div>

            <AppImage src={bgImage} className={cls.RegistrationPage__bg} />
        </div>
    );
}
