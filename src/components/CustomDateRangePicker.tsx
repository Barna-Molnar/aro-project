
import 'react-date-range/dist/styles.css'; // main style file
// import 'react-date-range/dist/theme/default.css'; // theme css file
import '../styles/ReactDateRangeThemeCustomization.scss';
import { DateRange } from 'react-date-range';
import { useState } from 'react';
import { format } from 'date-fns';
import { ReactComponent as Envelope } from '../assets/images/envelope.svg';
import Button from './Button';

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
            <div style={{borderBottom: "1.5px solid #696B6B"}}>
                <DateRange
                    onChange={item => setRangeState([item.selection] as typeof rangeState)}
                    moveRangeOnFirstSelection={false}
                    ranges={rangeState}
                    color={""}
                    showMonthArrow={false}
                />
            </div>
            <div style={{ marginTop: "68px", display: "flex", justifyContent: "end", width: "100%" }}>
                {/* TODO: request for the proper icon */}
                <Button title='Jetzt abschicken' icon={<Envelope />} border disabled />
            </div>
        </div>
    );

};

export default CustomDateRangePicker