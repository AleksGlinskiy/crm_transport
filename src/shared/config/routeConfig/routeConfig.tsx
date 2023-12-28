import {RouteProps} from "react-router-dom";
import {AuthPage} from "pages/AuthPage";
import {DashboardPage} from "pages/DashboardPage";
import {AboutPage} from "pages/AboutPage";

export enum AppRoutes {
    DASHBOARD = 'dashboard',
    LOGIN = 'login',
    ABOUT = 'about',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.DASHBOARD]: '/',
    [AppRoutes.LOGIN]: '/login',
    [AppRoutes.ABOUT]: '/about',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.DASHBOARD]: {
        path: RoutePath.dashboard,
        element: <DashboardPage />
    },
    [AppRoutes.LOGIN]: {
        path: RoutePath.login,
        element: <AuthPage />
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />
    }
}