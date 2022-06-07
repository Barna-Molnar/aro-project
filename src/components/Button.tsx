
import { FC } from 'react';
import style from '../styles/Button.module.scss'

export interface ButtonProps {
    title: string;
    icon: JSX.Element;
    border?: boolean;
};

const Button: FC<ButtonProps> = ({ icon, title, border, ...rest }) => {

    return (
        <button className={`${border ? style.borderButton : style.button}`} {...rest}>
            {icon}
            {title}
        </button>
    );
};

export default Button;