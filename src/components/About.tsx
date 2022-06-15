import Divider from "./Divider";
import AboutStyles from '../styles/About.module.scss';
import Button from "./Button";
import { ReactComponent as Calendar } from '../assets/calendar.svg';

const About = () => {
    return (
        <div className={AboutStyles.wrapper}>
            <div className={AboutStyles.titleWrapper}>
                <Divider />
                <h2 className={AboutStyles.title}>Warum aro?</h2>
            </div>
            <div className={AboutStyles.contentWrapper}>
                <p>
                    Sie möchten einen 9-Sitzer Bus oder einen Transporter mieten, mit oder ohne Fahrer, dann sind Sie hier richtig.
                </p>
                <p>
                    Kundenzufriedenheit hat bei uns einen hohen Stellenwert. Deshalb bieten wir Qualität und Zuverlässigkeit zu fairen Preisen an.
                </p>
                <Button border title="Jetzt Anfragen" icon={<Calendar />} />
            </div>

        </div>
    )
}

export default About