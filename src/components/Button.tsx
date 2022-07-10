import { FC } from 'react';
import ButtonStyle from '../styles/Button.module.scss'

export interface ButtonProps {
    title: string;
    icon: JSX.Element;
    border?: boolean;
    disabled?: boolean;

};

const Button: FC<ButtonProps> = ({ icon, title, border,disabled, ...rest }) => {

    return (
        <button className={`${border 
        ? ButtonStyle.borderButton 
        : ButtonStyle.button}
         ${disabled ? ButtonStyle.disabledBorderBtn : ''}`} 
        {...rest}
        >
            {icon}
            {title}
        </button>
    );
};

export default Button;