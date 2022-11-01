
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
interface IDateRange {
    startDate?: Date | undefined;
    endDate?: Date | undefined;
    key?: string | undefined;
    isTouched: boolean
}
interface CustomDateRangePickerProps {
    isFieldsTouched: boolean;
    onEmailSend: (e: any) => void;
}

const initialRange: IDateRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
    isTouched: false
}

const CustomDateRangePicker: FC<CustomDateRangePickerProps> = (props) => {

    const [rangeState, setRangeState] = useState<Array<IDateRange>>([initialRange]);
    // console.log(rangeState)
    // console.log(formatDate(rangeState[0].endDate!));
    // console.log(formatDate(rangeState[0].startDate!));

    return (
        <div>
            <div className={DateRangeStyles.dateRangeContainer}>
                <DateRange
                    onChange={item => {

                        if (item.selection.endDate!.getTime() < new Date().getTime()) return setRangeState([initialRange])

                        setRangeState([{ ...item.selection, isTouched: true }])

                    }}
                    moveRangeOnFirstSelection={true} // keep the first selected range and show for the next one the same 
                    ranges={rangeState}
                    color={""}
                    disabledDates={[]}
                // showMonthArrow={false}
                />
            </div>
            <div className={DateRangeStyles.actionBtnContainer}>
                {/* TODO: request for the proper icon */}
                <Button
                    title='Jetzt abschicken'
                    icon={<Envelope />}
                    border
                    disabled={props.isFieldsTouched ? !rangeState[0].isTouched : true}
                    onClick={props.isFieldsTouched
                        ? (e: any) => props.onEmailSend(e)
                        : () => { }
                    }
                />
            </div>
        </div>
    );
};

export default CustomDateRangePicker