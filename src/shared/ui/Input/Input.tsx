import React, { type InputHTMLAttributes, useState } from 'react';
import classNames from 'classnames';
import cls from './Input.module.scss';
import IconClear from '@/shared/assets/icons/close.svg';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string
    value?: string
    label?: string
    error?: boolean
    errorMessage?: string
    onChange?: (value: string) => void
}

export function Input(props: InputProps) {
    const {
        className,
        value,
        label,
        required,
        onChange,
        error,
        errorMessage,
        ...otherProps
    } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const onClearHandler = () => {
        onChange?.('');
    };

    return (
        <label className={classNames(cls.Input, { [cls.Input_error]: error }, className)}>
            {label && (
                <span className={cls.Input__label}>
                    {label}
                    {required && <span>*</span>}
                </span>
            )}
            <span className={cls.Input__wrapTag}>
                <input
                    className={cls.Input__tag}
                    value={value}
                    onChange={onChangeHandler}
                    required={required}
                    {...otherProps}
                />

                {error && (
                    <button
                        className={cls.Input__btnClear}
                        aria-label="Очистить"
                        type="button"
                        onClick={onClearHandler}
                    >
                        <IconClear />
                    </button>
                )}
            </span>
            {errorMessage && (
                <span className={cls.Input__message}>
                    {errorMessage}
                </span>
            )}
        </label>
    );
}
