import cls from './Button.module.scss';
import {ReactNode} from "react";

interface PropsButton {
    children: ReactNode;
}

export function Button(props: PropsButton) {
    const {children} = props;
    return (
        <button className={cls.Button}>{children}</button>
    )
}