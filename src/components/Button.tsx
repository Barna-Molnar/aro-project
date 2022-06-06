import { FC } from 'react';
import style from '../styles/Button.module.css'
import styled from 'styled-components';

export interface ButtonProps {
    title?: string;
    icon?: JSX.Element;
};

const Btn = styled.button`
    display: flex;
    gap: 10px;
    justify-content: center;
    padding: 11px 16px;
    background-color: transparent;
    color: #FFA420;
    border: 2.5px solid;
    border-image-slice: 1;
    border-width: 5px;
    border-image-source: linear-gradient(286.72deg, #FDD31D 0%, #F96935 100%);
    transition: all ease-out 0.3s;

    svg {
        width: 16px;
        height: 16px;
        fill: currentColor;
    } 
    &:hover {
        border-image-source: linear-gradient(286.72deg, #FFA420 0%, #FDD31D 100%);
        color: #FDD31D;
    }
`

const Button: FC<ButtonProps> = ({ icon, title, ...rest }) => {

    return (
        <Btn {...rest}>
            {icon}
            {title}
        </Btn>
    );
};

export default Button;