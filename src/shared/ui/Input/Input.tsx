import cls from './Input.module.scss';
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {

}

export function Input(props: InputProps) {
    return (
        <input className={cls.Input} {...props} />
    )
}