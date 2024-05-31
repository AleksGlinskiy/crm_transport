import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';
import cls from './Flex.module.scss';

export type FlexJustify = 'center' | 'start' | 'end' | 'between' | 'around';
export type FlexAlign = 'center' | 'start' | 'end' | 'stretch';
export type FlexDirection = 'column' | 'row' | 'columnReverse' | 'rowReverse';
export type FlexGap = '4' | '8' | '12' | '16' | '24' | '32' | '40';

const justifyClasses: Record<FlexJustify, string> = {
    center: cls.justify_center,
    start: cls.justify_start,
    end: cls.justify_end,
    between: cls.justify_between,
    around: cls.justify_around,
};

const alignClasses: Record<FlexAlign, string> = {
    center: cls.align_center,
    start: cls.align_start,
    end: cls.align_end,
    stretch: cls.align_stretch,
};

const directionClasses: Record<FlexDirection, string> = {
    column: cls.direction_column,
    row: cls.direction_row,
    columnReverse: cls.direction_columnReverse,
    rowReverse: cls.direction_rowReverse,
};

const gapClasses: Record<FlexGap, string> = {
    4: cls.gap_4,
    8: cls.gap_8,
    12: cls.gap_12,
    16: cls.gap_16,
    24: cls.gap_24,
    32: cls.gap_32,
    40: cls.gap_40,
};

type DivProps = DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>;

export interface FlexProps extends DivProps {
    children: ReactNode;
    className?: string;
    justify?: FlexJustify;
    align?: FlexAlign;
    direction?: FlexDirection;
    gap?: FlexGap;
}

export function Flex(props: FlexProps) {
    const {
        children,
        className,
        justify = 'start',
        align = 'stretch',
        direction = 'row',
        gap,
    } = props;

    const classes = [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        gap && gapClasses[gap],
    ];

    return <div className={classNames(cls.Flex, classes)}>{children}</div>;
}
