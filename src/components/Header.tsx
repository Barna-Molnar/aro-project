import { FC } from 'react';
import style from '../styles/Header.module.scss'
import Button from './Button';
import { ReactComponent as Calendar } from '../assets/calendar.svg'
import { ReactComponent as Phone } from '../assets/phone.svg'

export interface HeaderProps { };


const Header: FC<HeaderProps> = (props) => {

    return (
        <div className={style.wrapper}>
            <Button title='0177-1832931' icon={<Phone />} />
            <h1 className={style.headerTitle}>I am the header</h1>
            <Button title="Jetzt Anfragen" border icon={<Calendar />} />
        </div>
    );
};

export default Header;