import { ReactNode } from 'react';
import classNames from 'classnames';
import { Sidebar } from '@/widgets/Sidebar';
import cls from './Layout.module.scss';

interface LayoutProps {
    className?: string;
    children: ReactNode;
}

export function Layout(props: LayoutProps) {
    const { className, children } = props;

    return (
        <div className={classNames(cls.Layout, className)}>
            <Sidebar className={cls.Layout__sidebar} />

            <div className={cls.Layout__page}>
                <div className={cls.Layout__content}>{children}</div>

                <footer className={cls.Layout__footer}>Footer</footer>
            </div>
        </div>
    );
}
