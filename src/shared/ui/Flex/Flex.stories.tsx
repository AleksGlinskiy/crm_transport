import type { Meta, StoryObj } from '@storybook/react';

import { Flex } from './Flex';

const Col = () => (
    <div
        style={{
            backgroundColor: 'var(--btn-color-outline)',
            padding: '15px',
            borderRadius: '2px',
        }}
    >
        Element
    </div>
);

const meta: Meta<typeof Flex> = {
    title: 'Components/Flex',
    component: Flex,
    argTypes: {
        justify: {
            control: {
                type: 'select',
            },
        },
        align: {
            control: {
                type: 'select',
            },
        },
        direction: {
            control: {
                type: 'select',
            },
        },
        className: {
            table: {
                disable: true,
            },
        },
    },
    args: {
        children: (
            <>
                <Col />
                <Col />
                <Col />
                <Col />
                <Col />
            </>
        ),
        gap: '12',
    },
};

export default meta;
type Story = StoryObj<typeof Flex>;

export const FlexDefault: Story = {};

export const FlexJustifyCenter: Story = {
    args: {
        justify: 'center',
    },
};

export const FlexJustifyEnd: Story = {
    args: {
        justify: 'end',
    },
};

export const FlexJustifyBetween: Story = {
    args: {
        justify: 'between',
    },
};

export const FlexJustifyAround: Story = {
    args: {
        justify: 'around',
    },
};

export const FlexDirection: Story = {
    args: {
        direction: 'column',
    },
};

export const FlexDirectionAlignStart: Story = {
    args: {
        direction: 'column',
        align: 'start',
    },
};

export const FlexDirectionAlignCenter: Story = {
    args: {
        direction: 'column',
        align: 'center',
    },
};

export const FlexDirectionAlignEnd: Story = {
    args: {
        direction: 'column',
        align: 'end',
    },
};

export const FlexGap4: Story = { args: { gap: '4' } };

export const FlexGap8: Story = { args: { gap: '8' } };

export const FlexGap12: Story = { args: { gap: '12' } };

export const FlexGap16: Story = { args: { gap: '16' } };

export const FlexGap24: Story = { args: { gap: '24' } };

export const FlexGap32: Story = { args: { gap: '32' } };

export const FlexGap40: Story = { args: { gap: '40' } };
