import { ButtonHTMLAttributes, type ReactNode } from 'react';
import classNames from 'classnames';
import cls from './Button.module.scss';
import IconLoader from '@/shared/assets/icons/loading.svg';

export enum ButtonVariants {
    PRIMARY = 'primary',
    OUTLINE = 'outline',
    TEXTED = 'texted',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: ButtonVariants;
    className?: string;
    loading?: boolean;
}

export function Button(props: ButtonProps) {
    const {
        children,
        className,
        variant = ButtonVariants.PRIMARY,
        loading,
        ...otherProps
    } = props;

    const mods = {
        [cls[variant]]: true,
        [cls.loading]: loading,
    };

    return (
        <button
            className={classNames(cls.Button, mods, className)}
            type='button'
            {...otherProps}
        >
            {loading && (
                <IconLoader width={19} height={19} />
            )}
            <span>{children}</span>
        </button>
    );
}
