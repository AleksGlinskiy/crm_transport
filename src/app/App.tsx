import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppRouter } from '@/app/providers/router';
import { userActions, getUserInited } from '@/entities/User';
import PageLoader from '@/shared/ui/PageLoader/PageLoader';
import './styles/style.scss';
import Layout from '@/shared/ui/Layout/Layout';

export default function App() {
    const dispatch = useDispatch();
    const inited = useSelector(getUserInited);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    const content = inited ? <AppRouter /> : <PageLoader />;

    return (
        <Layout>
            {content}
        </Layout>
    );
}
