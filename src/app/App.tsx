import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppRouter } from '@/app/providers/router';
import { userActions, getUserInited, getUserAuthData } from '@/entities/User';
import { PageLoader } from '@/shared/ui/PageLoader';
import { Layout } from '@/shared/ui/Layout';
import './styles/style.scss';

export default function App() {
    const dispatch = useDispatch();
    const inited = useSelector(getUserInited);
    const auth = useSelector(getUserAuthData);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    const content = inited ? <AppRouter /> : <PageLoader />;

    if (!auth) {
        return content;
    }

    return <Layout>{content}</Layout>;
}
