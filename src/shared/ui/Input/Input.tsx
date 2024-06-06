import React, { type InputHTMLAttributes, useState, forwardRef } from 'react';
import classNames from 'classnames';
import cls from './Input.module.scss';
import IconClear from '@/shared/assets/icons/close.svg';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange'
>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    label?: string;
    error?: boolean;
    errorMessage?: string;
    readonly?: boolean;
    onChange?: (value: string) => void;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
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

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const onClearHandler = () => {
        onChange?.('');
    };

    const mods = {
        [cls.Input_error]: error,
        [cls.Input_readonly]: readonly,
    };

    return (
        <label className={classNames(cls.Input, mods, className)}>
            {label && (
                <span className={cls.Input__label}>
                    {label}
                    {required && <span>*</span>}
                </span>
            )}
            <span className={cls.Input__wrapTag}>
                <input
                    ref={ref}
                    className={cls.Input__tag}
                    value={value}
                    onChange={onChangeHandler}
                    required={required}
                    readOnly={readonly}
                    {...otherProps}
                />

                {error && (
                    <button
                        className={cls.Input__btnClear}
                        aria-label='Очистить'
                        type='button'
                        onClick={onClearHandler}
                    >
                        <IconClear />
                    </button>
                )}
            </span>
            {errorMessage && (
                <span className={cls.Input__message}>{errorMessage}</span>
            )}
        </label>
    );
});
