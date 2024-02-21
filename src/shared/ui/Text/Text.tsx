import cls from './Text.module.scss';

export type TextAlign = 'right' | 'left' | 'center';
export type TextSize = 's' | 'm' | 'l';

interface TextProps {
    className?: string;
    align?: TextAlign;
    text?: string;
    size?: TextSize;
}

export function Text(props: TextProps) {
    const {
        className, align, text, size,
    } = props;
    return (
        <div className={cls.Text}>
            {text}
        </div>
    );
}
