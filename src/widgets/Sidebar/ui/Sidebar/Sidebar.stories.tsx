import type { Meta, StoryObj } from '@storybook/react';

import { Sidebar } from './Sidebar';
import { StoreProvider } from '@/app/providers/StoreProvider';

const meta: Meta<typeof Sidebar> = {
    title: 'Widgets/Sidebar',
    component: Sidebar,
    decorators: [
        (Story) => (
            <StoreProvider>
                <Story />
            </StoreProvider>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const SidebarDefault: Story = {};
