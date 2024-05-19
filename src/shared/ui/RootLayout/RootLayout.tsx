import { ReactNode } from 'react';
import classNames from 'classnames';
import cls from './RootLayout.module.scss';
import { useTheme } from '@/shared/lib/hooks/useTheme';
import { Layout } from '../Layout';

interface RootLayoutProps {
    className?: string;
    children: ReactNode;
    isAuth?: boolean;
}

export function RootLayout(props: RootLayoutProps) {
    const { className, children, isAuth } = props;
    const { theme } = useTheme();

    if (!isAuth) {
        return (
            <div className={classNames(cls.RootLayout, className, theme)}>
                {children}
            </div>
        );
    }

    return (
        <div className={classNames(cls.RootLayout, className, theme)}>
            <Layout>{children}</Layout>
        </div>
    );
}
