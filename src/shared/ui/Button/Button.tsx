import { ButtonHTMLAttributes, type ReactNode } from 'react';
import cls from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function Button(props: ButtonProps) {
    const {
        children,
        ...otherProps
    } = props;
    return (
        <button
            className={cls.Button}
            type="button"
            {...otherProps}
        >
            {children}
        </button>
    );
}
