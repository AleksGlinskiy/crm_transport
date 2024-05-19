import React from 'react';
import { Decorator } from '@storybook/react/*';
import ThemeProvider from '@/app/providers/ThemeProvider';
import { Theme } from '@/shared/const/theme';
import { Layout } from '@/shared/ui/Layout';
import { RootLayout } from '@/shared/ui/RootLayout';

export const ThemeDecorator =
    (theme: Theme): Decorator =>
    (Story) => (
        <ThemeProvider initialTheme={theme}>
            <RootLayout>
                <Story />
            </RootLayout>
        </ThemeProvider>
    );
