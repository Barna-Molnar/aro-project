import aroLogo from '../assets/images/aro_logo_3.svg';
import FooterStyles from '../styles/Footer.module.scss'

const Footer = () => {
  return (
    <div className={FooterStyles.container}>
        <div className={FooterStyles.copyright}>
            <p>&copy; Copyright 2022</p>
            <img src={aroLogo} alt="Aro Profile Logo" />
        </div>
        <div className={FooterStyles.links}>
            <span>Impressum</span>
            <span>.</span>
            <span>Datenschutz</span>
            <span>.</span>
            <span>Cookie-Enstellungen</span>
        </div>
    </div>
  )
}

export default Footer