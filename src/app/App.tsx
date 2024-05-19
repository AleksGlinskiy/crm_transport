import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppRouter } from '@/app/providers/router';
import { userActions, getUserInited, getUserAuthData } from '@/entities/User';
import { PageLoader } from '@/shared/ui/PageLoader';
import { RootLayout } from '@/shared/ui/RootLayout';
import './styles/style.scss';

export default function App() {
    const dispatch = useDispatch();
    const userInitiated = useSelector(getUserInited);
    const auth = useSelector(getUserAuthData);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    const content = userInitiated ? <AppRouter /> : <PageLoader />;

    return <RootLayout isAuth={Boolean(auth)}>{content}</RootLayout>;
}
