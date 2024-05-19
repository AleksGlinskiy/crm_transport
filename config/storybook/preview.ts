import type { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../src/shared/const/theme';

import '../../src/app/styles/style.scss';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        layout: 'fullscreen',
        backgrounds: { disable: true },
        darkMode: {
            dark: { ...themes.dark },
            light: { ...themes.normal },
            stylePreview: true,
        },
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export default preview;
