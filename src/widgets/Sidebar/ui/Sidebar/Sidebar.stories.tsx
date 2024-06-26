import type { Meta, StoryObj } from '@storybook/react';

import { Sidebar } from './Sidebar';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { NoPaddingDecorator } from '@/shared/config/storybook/NoPaddingDecorator/NoPaddingDecorator';

const meta: Meta<typeof Sidebar> = {
    title: 'Widgets/Sidebar',
    component: Sidebar,
    decorators: [NoPaddingDecorator()],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const SidebarDefault: Story = {};
