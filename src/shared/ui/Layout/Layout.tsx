import { ReactNode, useContext } from 'react';
import classNames from 'classnames';
import { Sidebar } from '@/widgets/Sidebar';
import cls from './Layout.module.scss';
import { useTheme } from '@/shared/lib/hooks/useTheme';
import { Button } from '../Button';
import { Theme } from '@/shared/const/theme';

interface LayoutProps {
    className?: string;
    children: ReactNode;
}

export function Layout(props: LayoutProps) {
    const { className, children } = props;

    const { theme, themeToggle } = useTheme();

    const click = () => {
        themeToggle(Theme.LIGHT);
    };

    const click2 = () => {
        themeToggle(Theme.DARK);
    };

    const click3 = () => {
        themeToggle(Theme.SYSTEM);
    };

    return (
        <div className={classNames(cls.Layout, className)}>
            <Sidebar className={cls.Layout__sidebar} />

            <div className={cls.Layout__page}>
                <div className={cls.Layout__content}>{children}</div>

                <Button onClick={click}>LIGHT</Button>
                <Button onClick={click2}>DARK</Button>
                <Button onClick={click3}>SYSTEM</Button>

                <footer className={cls.Layout__footer}>Footer</footer>
            </div>
        </div>
    );
}
