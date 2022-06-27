import ComponentStyles from '../styles/ComponentStyles.module.scss';
import Divider from './Divider';
import renaultImage from '../assets/renault.png'
import Accordion from './Accordion';
import Button from './Button';
import { ReactComponent as Calendar } from '../assets/calendar.svg';
import { ReactComponent as Galery } from '../assets/galery.svg';
import data from '../data.json'
import DisplayContent from './DisplayContent';


const Renting = () => {
    return (
        <div className={ComponentStyles.container}>
            <div className={ComponentStyles.rightTitleWrapper}>
                <h2 className={ComponentStyles.title}>Vermietlung</h2>
                <Divider />
            </div>
            <div className={ComponentStyles.boxContentRight}>
                <div className={ComponentStyles.infoWrapper}>
                    <div className={ComponentStyles.paragraphsWrapper}>
                        <DisplayContent content={data.Rent.description} />
                    </div>
                    <Accordion contents={data.Rent.accordion} />
                    <div className={ComponentStyles.actionBtnWrapper}>
                        <Button border title="Jetzt Anfragen" icon={<Calendar />} />
                        <Button border title="Zur Bildergalerie" icon={<Galery />} />
                    </div>
                </div>
                <div className={ComponentStyles.imageWrapper}>
                    <img src={renaultImage} alt="Reanult logo" />
                </div>
            </div>
        </div>
    )
}

export default Renting
