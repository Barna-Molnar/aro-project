import Divider from "./Divider";
import ComponentStyles from '../styles/ComponentStyles.module.scss';
import Button from "./Button";
import { ReactComponent as Calendar } from '../assets/calendar.svg';

const About = () => {
    return (
        <div className={ComponentStyles.aboutContainer}>
            <div className={ComponentStyles.leftTitleWrapper}>
                <h2 className={ComponentStyles.title}>Warum aro?</h2>
                <Divider />
            </div>
            <div className={ComponentStyles.boxContentLeft}>
                <div className={ComponentStyles.infoWrapper}>
                    <div className={ComponentStyles.paragraphsWrapper}>
                        <p>
                            Sie möchten einen 9-Sitzer Bus oder einen Transporter mieten, mit oder ohne Fahrer, dann sind Sie hier richtig.
                        </p>
                        <p>
                            Kundenzufriedenheit hat bei uns einen hohen Stellenwert. Deshalb bieten wir Qualität und Zuverlässigkeit zu fairen Preisen an.
                        </p>
                    </div>
                    <div className={ComponentStyles.actionBtnWrapper}>
                        <Button border title="Jetzt Anfragen" icon={<Calendar />} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About