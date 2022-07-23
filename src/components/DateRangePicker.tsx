
import 'react-date-range/dist/styles.css'; // main style file
// import 'react-date-range/dist/theme/default.css'; // theme css file
import '../styles/ReactDateRangeThemeCustomization.scss';
import { DateRange } from 'react-date-range';
import { FC, useState } from 'react';
import { format } from 'date-fns';
import { ReactComponent as Envelope } from '../assets/images/envelope.svg';
import Button from './Button';
import DateRangeStyles from '../styles/DateRangePicker.module.scss'

const formatDate = (date: Date) => {
    if (!date) return;
    return format(new Date(date), 'MM/dd/yyyy')
}
interface IDateRangeconst {
    startDate: Date | undefined;
    endDate: Date | undefined;
    key: string | undefined;
    isTouched: boolean
}
interface CustomDateRangePickerProps {
    isFieldsTouched: boolean;
}

const CustomDateRangePicker: FC<CustomDateRangePickerProps> = (props) => {

    const [rangeState, setRangeState] = useState<Array<IDateRangeconst>>([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
            isTouched: false
        }
    ]);
    // console.log(rangeState)
    // console.log(formatDate(rangeState[0].endDate!));
    // console.log(formatDate(rangeState[0].startDate!));
                
    return (
        <div>
            <div className={DateRangeStyles.dateRangeContainer}>
                <DateRange
                    onChange={item => setRangeState([{ ...item.selection, isTouched: true }] as typeof rangeState)}
                    moveRangeOnFirstSelection={false}
                    ranges={rangeState}
                    color={""}
                    showMonthArrow={false}
                />
            </div>
            <div className={DateRangeStyles.actionBtnContainer}>
                {/* TODO: request for the proper icon */}
                <Button
                    title='Jetzt abschicken'
                    icon={<Envelope />}
                    border
                    disabled={props.isFieldsTouched ? !rangeState[0].isTouched : true}
                />
            </div>
        </div>
    );

};

export default CustomDateRangePicker