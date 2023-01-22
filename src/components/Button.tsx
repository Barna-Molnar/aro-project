import { FC } from 'react';
import ButtonStyle from '../styles/Button.module.scss'

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
    title: string;
    icon: JSX.Element;
    border?: boolean;
    disabled?: boolean;
};

const Button: FC<ButtonProps> = ({ icon, title, border, disabled, ...rest }) => {

    const borderStyle = border ? ButtonStyle.borderedButton : ButtonStyle.button;
    const isDisabled = disabled ? ButtonStyle.disabledBorderBtn : '';
    return (
        <button className={`${borderStyle} ${isDisabled}`}
            aria-label={title}
            {...rest}
            
        >
            {icon}
            {title}
        </button>
    );
};

export default Button;