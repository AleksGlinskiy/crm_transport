import { Decorator } from '@storybook/react/*';

import cls from './NoPaddingDecorator.module.scss';

export const NoPaddingDecorator = (): Decorator => (Story) => (
    <div className={cls.NoPaddingDecorator}>
        <Story />
    </div>
);
