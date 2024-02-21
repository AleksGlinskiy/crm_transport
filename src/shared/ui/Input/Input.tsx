import React, { type InputHTMLAttributes } from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string
  label?: string
  onChange?: (value: string) => void
}

export function Input(props: InputProps) {
    const {
        className,
        value,
        label,
        required,
        onChange,
        ...otherProps
    } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <label className={cls.Input}>
            {label && (
                <span className={cls.Input__label}>
                    {label}
                    {required && <span>*</span>}
                </span>
            )}
            <input
                className={cls.Input__tag}
                value={value}
                onChange={onChangeHandler}
                required
                {...otherProps}
            />
        </label>
    );
}
