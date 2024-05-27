import { ReactElement, ReactNode } from 'react';
import classNames from 'classnames';
import cls from './Flex.module.scss';

interface FlexProps {
    children: any;
    className?: string;
}

export function Flex(props: FlexProps) {
    const {
        children,
        className,
    } = props;

    return (
        <div className={classNames(cls.Flex, className)}>
            {children}
        </div>
    );
}
