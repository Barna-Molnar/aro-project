
import 'react-date-range/dist/styles.css'; // main style file
// import 'react-date-range/dist/theme/default.css'; // theme css file
import '../styles/ReactDateRangeThemeCustomization.scss';
import { DateRange } from 'react-date-range';
import { useState } from 'react';
import { format } from 'date-fns';
import { ReactComponent as Envelope } from '../assets/images/envelope.svg';
import Button from './Button';
import DateRangeStyles from '../styles/DateRangePicker.module.scss'

const formatDate = (date: Date) => {
    return format(new Date(date), 'MM/dd/yyyy')
}

const CustomDateRangePicker = () => {

    const [rangeState, setRangeState] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    console.log(formatDate(rangeState[0].endDate));
    console.log(formatDate(rangeState[0].startDate));
    return (
        <div>
            <div className={DateRangeStyles.dateRangeContainer}>
                <DateRange
                    onChange={item => setRangeState([item.selection] as typeof rangeState)}
                    moveRangeOnFirstSelection={false}
                    ranges={rangeState}
                    color={""}
                    showMonthArrow={false}
                />
            </div>
            <div className={DateRangeStyles.actionBtnContainer}>
                {/* TODO: request for the proper icon */}
                <Button title='Jetzt abschicken' icon={<Envelope />} border disabled />
            </div>
        </div>
    );

};

export default CustomDateRangePicker