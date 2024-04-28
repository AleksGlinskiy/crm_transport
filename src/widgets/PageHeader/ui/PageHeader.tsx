import classNames from 'classnames';
import { ReactNode } from 'react';
import cls from './PageHeader.module.scss';
import { Text, TextStyle, TextTag } from '@/shared/ui/Text/Text';

interface PageHeaderProps {
    className?: string;
    title?: string;
    text?: string;
    actions?: ReactNode;
}

export function PageHeader(props: PageHeaderProps) {
    const { className, title, text, actions } = props;

    return (
        <div className={classNames(cls.PageHeader, className)}>
            <div className={cls.PageHeader__content}>
                <Text tag={TextTag.H1} style={TextStyle.H2}>
                    {title}
                </Text>
                {text && <Text>{text}</Text>}
            </div>

            {actions && (
                <div className={cls.PageHeader__actions}>{actions}</div>
            )}
        </div>
    );
}
