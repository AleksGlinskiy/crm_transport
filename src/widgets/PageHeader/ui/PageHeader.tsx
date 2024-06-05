import classNames from 'classnames';
import { ReactNode } from 'react';
import cls from './PageHeader.module.scss';
import { Text, TextStyle, TextTag } from '@/shared/ui/Text/Text';
import { HStack, VStack } from '@/shared/ui/Stack';

interface PageHeaderProps {
    className?: string;
    title?: string;
    text?: string;
    actions?: ReactNode;
}

export function PageHeader(props: PageHeaderProps) {
    const { className, title, text, actions } = props;

    return (
        <HStack
            justify='between'
            align='center'
            className={classNames(cls.PageHeader, className)}
        >
            <VStack gap='8'>
                <Text tag={TextTag.H1} style={TextStyle.H2}>
                    {title}
                </Text>
                {text && <Text>{text}</Text>}
            </VStack>

            {actions && (
                <HStack justify='between' align='center'>
                    {actions}
                </HStack>
            )}
        </HStack>
    );
}
