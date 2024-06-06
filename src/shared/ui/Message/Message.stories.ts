import type { Meta, StoryObj } from '@storybook/react';
import { Message, MessageVariants } from './Message';

const meta: Meta<typeof Message> = {
    title: 'Components/Message',
    component: Message,
    argTypes: {
        variant: {
            options: [
                MessageVariants.SUCCESS,
                MessageVariants.ERROR,
                MessageVariants.WARNING,
            ],
            control: {
                type: 'inline-radio',
                labels: {
                    [MessageVariants.SUCCESS]: 'Success',
                    [MessageVariants.ERROR]: 'Error',
                    [MessageVariants.WARNING]: 'Warning',
                },
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Message>;

export const MessageSuccess: Story = {
    args: {
        variant: MessageVariants.SUCCESS,
        children: 'Успешное сообщение!',
    },
};

export const MessageError: Story = {
    args: {
        variant: MessageVariants.ERROR,
        children: 'Сообщение с ошибкой!',
    },
};

export const MessageWarning: Story = {
    args: {
        variant: MessageVariants.WARNING,
        children: 'Сообщение с предупреждением!',
    },
};
