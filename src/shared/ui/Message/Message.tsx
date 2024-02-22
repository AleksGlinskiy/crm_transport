import { type ReactNode } from 'react';
import classNames from 'classnames';
import cls from './Message.module.scss';

export enum MessageVariants {
    SUCCESS = 'success',
    ERROR = 'error',
    WARNING = 'warning',
}

interface MessageProps {
    children: ReactNode;
    variant?: MessageVariants;
    className?: string;
}

export function Message(props: MessageProps) {
    const {
        children,
        className,
        variant = MessageVariants.SUCCESS,
        ...otherProps
    } = props;

    const mods = {
        [cls[variant]]: true,
    };

    return (
        <div
            className={classNames(cls.Message, mods, className)}
            {...otherProps}
        >
            <span>{children}</span>
        </div>
    );
}
