import { type RouteProps } from 'react-router-dom';
import { AuthPage } from '@/pages/AuthPage';
import { DashboardPage } from '@/pages/DashboardPage';
import { AboutPage } from '@/pages/AboutPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

export enum AppRoutes {
  DASHBOARD = 'dashboard',
  LOGIN = 'login',
  ABOUT = 'about',
  NOT_FOUND = 'not_found',
}

export type AppRouteProps = RouteProps & {
    general?: boolean;
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.DASHBOARD]: '/',
    [AppRoutes.LOGIN]: '/login',
    [AppRoutes.ABOUT]: '/about',

    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
    [AppRoutes.DASHBOARD]: {
        path: RoutePath.dashboard,
        element: <DashboardPage />,
    },
    [AppRoutes.LOGIN]: {
        path: RoutePath.login,
        element: <AuthPage />,
        general: true,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
