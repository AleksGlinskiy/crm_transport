import { Decorator } from '@storybook/react/*';
import { StoreProvider } from '@/app/providers/StoreProvider';

export const StoreDecorator = (): Decorator => (Story) => (
    <StoreProvider
        initialState={{
            user: {
                _inited: true,
                authData: {
                    id: 1,
                    username: 'admin',
                },
            },
        }}
    >
        <Story />
    </StoreProvider>
);
