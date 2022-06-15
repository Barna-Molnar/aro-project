import { FC } from 'react';
import ButtonStyle from '../styles/Button.module.scss'

export interface ButtonProps {
    title: string;
    icon: JSX.Element;
    border?: boolean;
};

const Button: FC<ButtonProps> = ({ icon, title, border, ...rest }) => {

    return (
        <button className={`${border ? ButtonStyle.borderButton : ButtonStyle.button}`} {...rest}>
            {icon}
            {title}
        </button>
    );
};

export default Button;