import type { Meta, StoryObj } from '@storybook/react';
import AuthPage from './AuthPage';
import { NoPaddingDecorator } from '@/shared/config/storybook/NoPaddingDecorator/NoPaddingDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof AuthPage> = {
    title: 'Pages/AuthPage',
    component: AuthPage,
    decorators: [NoPaddingDecorator()],
};

export default meta;
type Story = StoryObj<typeof AuthPage>;

export const Auth: Story = {};
