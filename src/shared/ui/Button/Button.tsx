import { ButtonHTMLAttributes, type ReactNode } from 'react';
import classNames from 'classnames';
import cls from './Button.module.scss';

export enum ButtonVariants {
    PRIMARY = 'primary',
    OUTLINE = 'outline',
    PROCESS = 'process',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: ButtonVariants;
    className?: string;
}

export function Button(props: ButtonProps) {
    const {
        children,
        className,
        variant = ButtonVariants.PRIMARY,
        ...otherProps
    } = props;

    const mods = {
        [cls[variant]]: true,
    };

    return (
        <button
            className={classNames(cls.Button, mods, className)}
            type="button"
            {...otherProps}
        >
            <span>{children}</span>
        </button>
    );
}
