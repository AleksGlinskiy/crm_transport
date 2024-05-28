import type { Meta, StoryObj } from '@storybook/react';

import { Flex } from './Flex';

const meta: Meta<typeof Flex> = {
    title: 'Components/Flex',
    component: Flex,
};

export default meta;
type Story = StoryObj<typeof Flex>;

const Col = () => (<div style={{
    backgroundColor: 'var(--btn-color-outline)', 
    padding: '15px',
    borderRadius: '2px'

}}>Element</div>)

export const FlexDefault: Story = {
    args: {
        children: <>
            <Col />
            <Col />
            <Col />
            <Col />
            <Col />
        </>,
        gap: '12',
    },
};

export const FlexJustifyCenter: Story = {
    args: {
        children: <>
            <Col />
            <Col />
            <Col />
            <Col />
            <Col />
        </>,
        gap: '12',
        justify: 'center',
    },
};

export const FlexDirection: Story = {
    args: {
        children: <>
            <Col />
            <Col />
            <Col />
            <Col />
            <Col />
        </>,
        gap: '12',
        direction: 'column',
    },
};

