import type { Meta, StoryObj } from '@storybook/react';

import { Textarea } from './Textarea';

const meta: Meta<typeof Textarea> = {
    title: 'Components/Textarea',
    component: Textarea,
    args: {
        placeholder: 'Textarea placeholder',
        error: false,
        readonly: false,
        disabled: false
    },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const TextareaDefault: Story = {};

export const TextareaDisabled: Story = {
    args: {
        disabled: true,
    },
};

export const TextareaLabel: Story = {
    args: {
        label: 'label',
        value: 'ds'
    },
};

export const TextareaError: Story = {
    args: {
        label: 'label',
        error: true
    },
};

export const TextareaErrorMessage: Story = {
    args: {
        label: 'label',
        error: true,
        errorMessage: 'Error Message',
    },
};