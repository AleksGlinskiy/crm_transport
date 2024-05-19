import { Decorator } from '@storybook/react/*';
import ThemeProvider from '@/app/providers/ThemeProvider';
import { Theme } from '@/shared/const/theme';
import { RootLayout } from '@/shared/ui/RootLayout';

import cls from './ThemeDecorator.module.scss';

export const ThemeDecorator =
    (theme: Theme): Decorator =>
    (Story) => (
        <ThemeProvider initialTheme={theme}>
            <RootLayout className={cls.ThemeDecoratorContainer}>
                <Story />
            </RootLayout>
        </ThemeProvider>
    );
