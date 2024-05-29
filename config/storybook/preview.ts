import type { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { StoreDecorator } from '../../src/shared/config/storybook/StoreDecorator/StoreDecorator';
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
    decorators: [
        StoreDecorator(),
        RouterDecorator(),
        ThemeDecorator(Theme.LIGHT),
    ],
};

export default preview;
