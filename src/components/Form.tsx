import { useState } from 'react';
import FormStyles from '../styles/Form.module.scss';
import CustomDatePicker from './CustomDateRangePicker';
import CustomInputField from './CustomInputField';
import Divider from './Divider';

const Form = () => {
    const [name, setName] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    console.log(name);


    return (
        <div className={FormStyles.container}>
            <div className={FormStyles.titleWrapper}>
                <h2 className={FormStyles.title}>Anfrage</h2>
                <Divider />
            </div>
            <div className={FormStyles.formWrapper}>
                <div >
                    <div className={FormStyles.inputFlexBox}>
                        <CustomInputField label='Name*' value={name} onChange={handleChange} />
                        <CustomInputField label='E-Mail-Adresse*' value={name} onChange={handleChange} />
                        <CustomInputField label='Telefonnummer*' value={name} onChange={handleChange} />
                        <CustomInputField label='Gewünschter Service' value={name} onChange={handleChange} />
                        <CustomInputField label='Mit dem folgenden PKW' value={name} onChange={handleChange} />
                    </div>
                    <CustomInputField label='Ihre Nachricht*' value={name} onChange={handleChange} multiline fullWidth rows={10} />
                </div>
                <CustomDatePicker />
            </div>


            {/* FlexBox */}

            {/* Column_1 : inputfields + textarea + small description */}
            {/* Column_2 : Calendar ?? if it is needed   + button */}

            {/* FlexBox */}
        </div>
    )
}

export default Form