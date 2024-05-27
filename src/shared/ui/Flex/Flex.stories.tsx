import type { Meta, StoryObj } from '@storybook/react';

import { Flex } from './Flex';

const meta: Meta<typeof Flex> = {
    title: 'Components/Flex',
    component: Flex,
    argTypes: {
    },
};

export default meta;
type Story = StoryObj<typeof Flex>;

export const FlexDefault: Story = {
    args: {
        children: <>
            <p>1</p>
            <p>2</p>
            <p>3</p>
        </>,
    },
};