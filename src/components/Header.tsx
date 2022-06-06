import { FC } from 'react';
import style from '../styles/Header.module.css'
import Button from './Button';
import { ReactComponent as Calendar } from '../assets/calendar.svg'

export interface HeaderProps { };


const Header: FC<HeaderProps> = (props) => {

    return (
        <div>
            <h1 className={style.headerTitle}>I am the header</h1>
            <Button title="I don't know" icon={<Calendar />} />
        </div>
    );
};

export default Header;