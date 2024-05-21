import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonVariants } from './Button';

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        variant: {
            options: [
                ButtonVariants.PRIMARY,
                ButtonVariants.OUTLINE,
                ButtonVariants.TEXTED,
            ],
            control: {
                type: 'inline-radio',
                labels: {
                    [ButtonVariants.PRIMARY]: 'Primary',
                    [ButtonVariants.OUTLINE]: 'Outline',
                    [ButtonVariants.TEXTED]: 'Texted',
                },
            },
        },
        loading: {
            control: {
                type: 'boolean',
            },
        },
    },
    args: {
        loading: false,
        disabled: false,
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const ButtonDefault: Story = {
    args: {
        variant: ButtonVariants.PRIMARY,
        children: 'Button Default',
    },
};

export const ButtonDefaultDisabled: Story = {
    args: {
        variant: ButtonVariants.PRIMARY,
        children: 'Button Default',
        disabled: true,
    },
};

export const ButtonOutline: Story = {
    args: {
        variant: ButtonVariants.OUTLINE,
        children: 'Button Outline',
    },
};

export const ButtonOutlineDisabled: Story = {
    args: {
        variant: ButtonVariants.OUTLINE,
        children: 'Button Outline',
        disabled: true,
    },
};

export const ButtonTexted: Story = {
    args: {
        variant: ButtonVariants.TEXTED,
        children: 'Button Texted',
    },
};

export const ButtonTextedDisabled: Story = {
    args: {
        variant: ButtonVariants.TEXTED,
        children: 'Button Texted',
        disabled: true,
    },
};
