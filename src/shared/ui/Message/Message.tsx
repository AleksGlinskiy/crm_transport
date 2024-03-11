import { type ReactNode } from 'react';
import classNames from 'classnames';
import cls from './Message.module.scss';
import IconInfo from '@/shared/assets/icons/info-circle.svg';

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
            <IconInfo width={15} height={15} />
            <span>{children}</span>
        </div>
    );
}
