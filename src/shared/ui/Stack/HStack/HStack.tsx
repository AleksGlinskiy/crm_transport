import { ReactNode } from 'react';
import { Flex, FlexProps } from '../Flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'>;

export function HStack(props: HStackProps) {
    return <Flex direction='row' {...props} />;
}
