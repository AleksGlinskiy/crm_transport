import {RouteProps} from "react-router-dom";
import {AuthPage} from "pages/AuthPage";
import {DashboardPage} from "pages/DashboardPage";

export enum AppRoutes {
    DASHBOARD = 'dashboard',
    LOGIN = 'login',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.DASHBOARD]: '/',
    [AppRoutes.LOGIN]: '/login',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.DASHBOARD]: {
        path: RoutePath.dashboard,
        element: <DashboardPage />
    },
    [AppRoutes.LOGIN]: {
        path: RoutePath.login,
        element: <AuthPage />
    }
}