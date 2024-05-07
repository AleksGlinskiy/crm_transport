import React, { TextareaHTMLAttributes } from 'react';
import classNames from 'classnames';
import cls from './Textarea.module.scss';
import IconClear from '@/shared/assets/icons/close.svg';

type HTMLTextareaProps = Omit<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    'value' | 'onChange'
>;

interface TextareaProps extends HTMLTextareaProps {
    className?: string;
    value?: string;
    label?: string;
    error?: boolean;
    errorMessage?: string;
    readonly?: boolean;
    onChange?: (value: string) => void;
}

export function Textarea(props: TextareaProps) {
    const {
        className,
        value,
        label,
        required,
        onChange,
        error,
        errorMessage,
        readonly,
        ...otherProps
    } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange?.(e.target.value);
    };

    const onClearHandler = () => {
        onChange?.('');
    };

    const mods = {
        [cls.Textarea_error]: error,
        [cls.Textarea_readonly]: readonly,
    };

    return (
        <label className={classNames(cls.Textarea, mods, className)}>
            {label && (
                <span className={cls.Textarea__label}>
                    {label}
                    {required && <span>*</span>}
                </span>
            )}
            <span className={cls.Textarea__wrapTag}>
                <textarea
                    className={cls.Textarea__tag}
                    onChange={onChangeHandler}
                    required={required}
                    value={value}
                    readOnly={readonly}
                    {...otherProps}
                />

                {error && (
                    <button
                        className={cls.Textarea__btnClear}
                        aria-label='Очистить'
                        type='button'
                        onClick={onClearHandler}
                    >
                        <IconClear />
                    </button>
                )}
            </span>
            {errorMessage && (
                <span className={cls.Textarea__message}>{errorMessage}</span>
            )}
        </label>
    );
}
