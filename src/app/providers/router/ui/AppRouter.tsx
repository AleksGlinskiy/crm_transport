import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PageLoader } from '@/shared/ui/PageLoader';
import {
    AppRouteProps,
    routeConfig,
    RoutePath,
} from '@/shared/config/routeConfig/routeConfig';
import { RequireAuth } from './RequireAuth';
import { getUserAuthData } from '@/entities/User';

export function AppRouter() {
    const auth = useSelector(getUserAuthData);

    const wrapperRouter = (route: AppRouteProps) => {
        const { path, element, general } = route;

        if (auth && path === RoutePath.login) {
            return null;
        }

        return (
            <Route
                key={path}
                path={path}
                element={
                    general ? element : <RequireAuth>{element}</RequireAuth>
                }
            />
        );
    };

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>{Object.values(routeConfig).map(wrapperRouter)}</Routes>
        </Suspense>
    );
}
