// @ts-nocheck
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
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
        <div className="App">
            <DateRange
                onChange={item => setState([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={state}
            />
        </div>
    );

};

export default CustomDatePicker