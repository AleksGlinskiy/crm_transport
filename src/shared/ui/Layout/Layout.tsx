import { ReactNode } from 'react';
import { Sidebar } from '@/widgets/Sidebar';
import cls from './Layout.module.scss';

interface LayoutProps {
    children: ReactNode;
}

export default function Layout(props: LayoutProps) {
    const { children } = props;

    return (
        <div className={cls.Layout}>
            <Sidebar className={cls.Layout__sidebar} />

            <div className={cls.Layout__page}>
                <div className={cls.Layout__content}>{children}</div>

                <footer className={cls.Layout__footer}>Footer</footer>
            </div>
        </div>
    );
}
