import { FC } from 'react';
import HeaderStyle from '../styles/Header.module.scss';
import Button from './Button';
import { ReactComponent as Calendar } from '../assets/images/calendar.svg';
import { ReactComponent as Phone } from '../assets/images/phone.svg';
import headerImage from '../assets/images/header.png';
import aroLogo from '../assets/images/aro_logo_3.svg';

export interface HeaderProps { };


const Header: FC<HeaderProps> = (props) => {

    return (
        <div className={HeaderStyle.headerWrapper}>
            <div className={HeaderStyle.titleWrapper}>
                <Button title='0177-1832931' icon={<Phone />} />
                <div className={HeaderStyle.profileLogoWrapper}>
                    <img src={aroLogo} alt="Aro Profile Logo" />
                </div>
                <Button title="Jetzt anfragen" border icon={<Calendar />} />
            </div>
            <div className={HeaderStyle.headerImgWrapper}>
                <img src={headerImage} alt="logo" />
            </div>
        </div>
    );
};

export default Header;