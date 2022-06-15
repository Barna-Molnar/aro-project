import { FC } from 'react';
import headerStyle from '../styles/Header.module.scss';
import Button from './Button';
import { ReactComponent as Calendar } from '../assets/calendar.svg';
import { ReactComponent as Phone } from '../assets/phone.svg';
import headerImage from '../assets/header.png';

export interface HeaderProps { };


const Header: FC<HeaderProps> = (props) => {

    return (
        <>
            <div className={headerStyle.titleWrapper}>
                <Button title='0177-1832931' icon={<Phone />} />
                <h1 className={headerStyle.headerTitle}>I am the header</h1>
                <Button title="Jetzt anfragen" border icon={<Calendar />} />
            </div>
            <div className={headerStyle.headerImgWrapper}>
                <img src={headerImage} alt="logo" />
            </div>
        </>
    );
};

export default Header;