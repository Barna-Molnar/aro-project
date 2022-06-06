import { FC } from 'react';
import style from '../styles/Header.module.css'

export interface HeaderProps { };


const Header: FC<HeaderProps> = (props) => {

    return (
        <div>
            <h1 className={style.headerTitle}>I am the header</h1>
        </div>
    );
};

export default Header;