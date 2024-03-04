import { ReactNode } from 'react';
import classNames from 'classnames';
import cls from './Text.module.scss';

export enum TextAlign {
    RIGHT = 'align_right',
    LEFT = 'align_left',
    CENTER = 'align_center',
}

export enum TextStyle {
    H1 = 'style_h1',
    H2 = 'style_h2',
    H3 = 'style_h3',
    H4 = 'style_h4',
    SMALL = 'style_small',
    BODY = 'style_body',
}

export enum TextTag {
    H1 = 'h1',
    H2 = 'h2',
    H3 = 'h3',
    H4 = 'h4',
    H5 = 'h5',
    H6 = 'h6',
    P = 'p',
}

interface TextProps {
    className?: string;
    align?: TextAlign;
    style?: TextStyle;
    tag?: TextTag;
    children: ReactNode;
}

export function Text(props: TextProps) {
    const {
        className,
        align = TextAlign.LEFT,
        style = TextStyle.BODY,
        tag = TextTag.P,
        children,
    } = props;

    const Text = tag;

    const mods = {
        [cls[style]]: true,
        [cls[align]]: true,
    };

    return (
        <Text className={classNames(cls.Text, mods, className)}>
            {children}
        </Text>
    );
}
