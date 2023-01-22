
import 'react-date-range/dist/styles.css'; // main style file
// import 'react-date-range/dist/theme/default.css'; // theme css file
import '../styles/ReactDateRangeThemeCustomization.scss';
import { DateRange, RangeKeyDict } from 'react-date-range';
import { FC, useState } from 'react';
import { format } from 'date-fns';
import { ReactComponent as Envelope } from '../assets/images/envelope.svg';
import Button from './Button';
import DateRangeStyles from '../styles/DateRangePicker.module.scss'


// TODO: built in formatter to get nicer dates
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
    onEmailSend: (e: any, dateRange: { startDate: string, endDate: string }) => void;
}

const initialRange: IDateRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
    isTouched: false
}

const CustomDateRangePicker: FC<CustomDateRangePickerProps> = (props) => {

    const [rangeState, setRangeState] = useState<Array<IDateRange>>([initialRange]);
    const { startDate, endDate } = rangeState[0]

    const handleOnDateRangeChange = (item: RangeKeyDict) => {
        const currentDate = Date.now() - (1000 * 60 * 60) // give the user a little time (60min)

        if (item.selection.endDate!.getTime() < currentDate || item.selection.startDate!.getTime() < currentDate) {
            return setRangeState([initialRange])
        }
        setRangeState([{ ...item.selection, isTouched: true }])
    }

    const handleOnSubmit = (e: any, isTouched: boolean) => {
        if (isTouched) {
            props.onEmailSend(e, {
                startDate: startDate!.toDateString(),
                endDate: endDate!.toDateString()
            });
            setRangeState([initialRange]);
        }
    }


    return (
        <div>
            <div className={DateRangeStyles.dateRangeContainer}>
                <DateRange
                    onChange={handleOnDateRangeChange}
                    ranges={rangeState}
                    // moveRangeOnFirstSelection={true} // keep the first selected range and show for the next one the same 
                />
            </div>
            <div className={DateRangeStyles.actionBtnContainer}>
                {/* TODO: request for the proper icon */}
                <Button
                    title='Jetzt abschicken'
                    aria-label='submit button'
                    icon={<Envelope />}
                    border
                    disabled={props.isFieldsTouched ? !rangeState[0].isTouched : true}
                    onClick={(e) => handleOnSubmit(e, props.isFieldsTouched)}
                />
            </div>
        </div>
    );
};

export default CustomDateRangePicker