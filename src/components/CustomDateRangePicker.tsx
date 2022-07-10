// @ts-nocheck
import 'react-date-range/dist/styles.css'; // main style file
// import 'react-date-range/dist/theme/default.css'; // theme css file
import '../styles/ReactDateRangeThemeCustomization.scss'
import { DateRange } from 'react-date-range';
import { useState } from 'react';
import { format } from 'date-fns'

const formatDate = (date: string) => {
    return format(new Date(date), 'MM/dd/yyyy')
}

const CustomDatePicker = () => {

    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    console.log(formatDate(state[0].endDate));
    console.log(formatDate(state[0].startDate));
    return (
        <div >
            <DateRange
                onChange={item => setState([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={state}
                color={null}
                showMonthArrow={false}
            />
            
        </div>
    );

};

export default CustomDatePicker