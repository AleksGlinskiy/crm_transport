import { ButtonHTMLAttributes, type ReactNode } from 'react';
import classNames from 'classnames';
import cls from './Button.module.scss';

// const ButtonVariants = 'primary' | 'outline' | 'process';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
}

export function Button(props: ButtonProps) {
    const {
        children,
        className,
        ...otherProps
    } = props;
    return (
        <button
            className={classNames(cls.Button, className)}
            type="button"
            {...otherProps}
        >
            {children}
        </button>
    );
}
