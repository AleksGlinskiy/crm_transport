import { Link } from 'react-router-dom';
import { LoginForm, loginReducer } from '@/features/AuthByUsername';
import useReducerManager, {
    ReducersList,
} from '@/shared/lib/hooks/useReducerManager';
import { Text, TextStyle, TextTag } from '@/shared/ui/Text/Text';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { AppImage } from '@/shared/ui/AppImage';
import useTitle from '@/shared/lib/hooks/useTitle';
import bgImage from '@/shared/assets/images/bg_2.jpg';
import cls from './AuthPage.module.scss';
import { VStack } from '@/shared/ui/Stack';

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

export default function AuthPage() {
    useTitle('Авторизация');
    useReducerManager(initialReducers);

    return (
        <div className={cls.AuthPage}>
            <div className={cls.AuthPage__content}>
                <VStack gap='24' className={cls.AuthPage__content_wrap}>
                    <Text tag={TextTag.H1} style={TextStyle.H1}>
                        Добро пожаловать! В&nbsp;TManager
                    </Text>

                    <Text className={cls.AuthPage__content_desc}>
                        У вас нет аккаунта?
                        <Link to={RoutePath.registration}>
                            Зарегистрироваться
                        </Link>
                    </Text>

                    <LoginForm className={cls.AuthPage__form} />
                </VStack>
            </div>

            <AppImage src={bgImage} className={cls.AuthPage__bg} />
        </div>
    );
}
