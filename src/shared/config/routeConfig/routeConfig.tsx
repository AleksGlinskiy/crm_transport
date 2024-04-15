import { type RouteProps } from 'react-router-dom';
import { AuthPage } from '@/pages/AuthPage';
import { DashboardPage } from '@/pages/DashboardPage';
import { AboutPage } from '@/pages/AboutPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { RegistrationPage } from '@/pages/RegistrationPage';
import { SettingsPage } from '@/pages/SettingsPage';
import { SupportPage } from '@/pages/SupportPage';
import { StopoverPage } from '@/pages/StopoverPage';
import { StopoverDetailsPage } from '@/pages/StopoverDetailsPage';

export enum AppRoutes {
    LOGIN = 'login',
    REGISTRATION = 'registration',

    DASHBOARD = 'dashboard',
    ABOUT = 'about',
    SETTINGS = 'settings',
    SUPPORT = 'support',

    ROUTE = 'route',
    TIMESHEET = 'timesheet',
    STOPOVER = 'stopover',
    STOPOVER_DETAILS = 'stopover_details',

    CARS = 'cars',
    CAR_MONITORING = 'car_monitoring',

    USERS = 'users',
    DRIVERS = 'drivers',
    ROLES = 'roles',

    CLIENTELE = 'clientele',

    NOT_FOUND = 'not_found',
}

export type AppRouteProps = RouteProps & {
    general?: boolean;
};

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.DASHBOARD]: '/',
    [AppRoutes.LOGIN]: '/login',
    [AppRoutes.REGISTRATION]: '/registration',

    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.SETTINGS]: 'settings',
    [AppRoutes.SUPPORT]: 'support',

    [AppRoutes.ROUTE]: '/route',
    [AppRoutes.TIMESHEET]: '/timesheet',
    [AppRoutes.STOPOVER]: '/stopover',
    [AppRoutes.STOPOVER_DETAILS]: '/stopover_details/',

    [AppRoutes.CARS]: '/cars',
    [AppRoutes.CAR_MONITORING]: '/car_monitoring',

    [AppRoutes.USERS]: '/users',
    [AppRoutes.DRIVERS]: '/drivers',
    [AppRoutes.ROLES]: '/roles',
    [AppRoutes.CLIENTELE]: '/clientele',

    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
    [AppRoutes.LOGIN]: {
        path: RoutePath.login,
        element: <AuthPage />,
        general: true,
    },
    [AppRoutes.REGISTRATION]: {
        path: RoutePath.registration,
        element: <RegistrationPage />,
        general: true,
    },
    [AppRoutes.DASHBOARD]: {
        path: RoutePath.dashboard,
        element: <DashboardPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [AppRoutes.SETTINGS]: {
        path: RoutePath.settings,
        element: <SettingsPage />,
    },
    [AppRoutes.SUPPORT]: {
        path: RoutePath.support,
        element: <SupportPage />,
    },
    [AppRoutes.ROUTE]: {
        path: RoutePath.route,
        element: <AboutPage />,
    },
    [AppRoutes.TIMESHEET]: {
        path: RoutePath.timesheet,
        element: <AboutPage />,
    },
    [AppRoutes.STOPOVER]: {
        path: RoutePath.stopover,
        element: <StopoverPage />,
    },
    [AppRoutes.STOPOVER_DETAILS]: {
        path: `${RoutePath.stopover_details}:id`,
        element: <StopoverDetailsPage />,
    },
    [AppRoutes.CARS]: {
        path: RoutePath.cars,
        element: <AboutPage />,
    },
    [AppRoutes.CAR_MONITORING]: {
        path: RoutePath.car_monitoring,
        element: <AboutPage />,
    },
    [AppRoutes.USERS]: {
        path: RoutePath.users,
        element: <AboutPage />,
    },
    [AppRoutes.DRIVERS]: {
        path: RoutePath.drivers,
        element: <AboutPage />,
    },
    [AppRoutes.ROLES]: {
        path: RoutePath.roles,
        element: <AboutPage />,
    },
    [AppRoutes.CLIENTELE]: {
        path: RoutePath.clientele,
        element: <AboutPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
