// @ts-nocheck
import 'react-date-range/dist/styles.css'; // main style file
// import 'react-date-range/dist/theme/default.css'; // theme css file
import '../styles/ReactDateRangeThemeCustomization.scss'
import { DateRange } from 'react-date-range';
import { useState } from 'react';


const CustomDatePicker = () => {

    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: null,
            key: "selection"
        }
    ]);

    console.log(state);
    return (
        <div >
            <DateRange

                color='#AFF252'
                // rangeColors={[`linear-gradient(286.72deg, #FFA420 0%, #FDD31D 100%)`]}
                onChange={item => setState([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={state}
            />
        </div>
    );

};

export default CustomDatePicker