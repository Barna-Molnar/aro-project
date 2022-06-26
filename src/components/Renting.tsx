import RentingStyles from '../styles/Renting.module.scss';
import Divider from './Divider';
import renaultImage from '../assets/renault.png'
import ControlledAccordions2 from './Accordion2';
import Button from './Button';
import { ReactComponent as Calendar } from '../assets/calendar.svg';
import { ReactComponent as Galery } from '../assets/galery.svg';


const Renting = () => {
    return (
        <div className={RentingStyles.container}>
            <div className={RentingStyles.titleWrapper}>
                <h2 className={RentingStyles.title}>Vermietlung</h2>
                <Divider />
            </div>
            <div className={RentingStyles.contentBox}>
                <div className={RentingStyles.imageWrapper}>
                    <img src={renaultImage} alt="Reanult logo" />
                </div>
                <div className={RentingStyles.infoWrapper}>
                    <p>
                        Sie können bei uns einen Renault Trafic 9-Sitzer mit viel Platz und Beinfreiheit sowie großem Kofferraum mieten. Die hintere Reihe kann eingeklappt oder die Sitze rausgenommen werden.  Zudem können auch zwei Kindersitze und als auch eine Babyschale  zusätzlich angemietet werden. Auf Anfrage kann der Bus auch ausgeliefert werden.
                    </p>
                    <p>
                        Der Bus ist Vollkasko versichert und kann von Personen  ab 23 Jahre angemietet werden. Die Kaution beträgt 350 €.
                    </p>
                    <ControlledAccordions2 />
                    <div className={RentingStyles.actionBtnWrapper}>
                        <Button border title="Jetzt Anfragen" icon={<Calendar />} />
                        <Button border title="Zur Bildergalerie" icon={<Galery />} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Renting
