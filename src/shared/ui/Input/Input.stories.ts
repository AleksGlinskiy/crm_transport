import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

const meta: Meta<typeof Input> = {
    title: 'Components/Input',
    component: Input,
    args: {
        placeholder: 'Input placeholder',
        error: false,
        readonly: false,
        disabled: false
    },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const InputDefault: Story = {};

export const InputDisabled: Story = {
    args: {
        disabled: true,
    },
};

export const InputLabel: Story = {
    args: {
        label: 'label',
        value: 'ds'
    },
};

export const InputError: Story = {
    args: {
        label: 'label',
        error: true
    },
};

export const InputErrorMessage: Story = {
    args: {
        label: 'label',
        error: true,
        errorMessage: 'Error Message',
    },
};