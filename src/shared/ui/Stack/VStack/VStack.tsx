import { ReactNode } from 'react';
import { Flex, FlexProps } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>;

export function VStack(props: VStackProps) {
    return <Flex direction='column' {...props} />;
}
