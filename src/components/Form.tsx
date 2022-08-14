import { useState } from 'react';
import FormStyles from '../styles/Form.module.scss';
import DateRangePicker from './DateRangePicker';
import CustomInputField from './CustomInputField';
import Divider from './Divider';
import { Cars, Services } from '../assets/data';

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [telNumber, setTelNumber] = useState('');
    const [message, setMessage] = useState('');
    const [wantedServive, setWantedServive] = useState('');
    const [wantedCar, setWantedCar] = useState('');

    const isFieldsTouched = (!!name && !!email && !!telNumber)
    return (
        <div className={FormStyles.container}>
            <div className={FormStyles.titleWrapper}>
                <h2 className={FormStyles.title}>Anfrage</h2>
                <Divider />
            </div>
            <div className={FormStyles.formWrapper}>
                <div>
                    <div className={FormStyles.inputFlexBox}>
                        <CustomInputField
                            label='Name*'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            autoComplete='none'
                        />
                        <CustomInputField
                            label='E-Mail-Adresse*'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            autoComplete='none'
                        />
                        <CustomInputField
                            label='Telefonnummer*'
                            value={telNumber}
                            onChange={(e) => setTelNumber(e.target.value)}
                            autoComplete='none'
                        />
                        <CustomInputField
                            label='Gewünschter Service'
                            value={wantedServive}
                            onChange={(e) => setWantedServive(e.target.value)}
                            select
                            SelectProps={{
                                native: true,
                            }}
                        >
                            {Services.map((service) => (
                                <option key={service.value} value={service.value}>
                                    {service.label}
                                </option>
                            ))}
                        </CustomInputField>
                        <CustomInputField
                            label='Mit dem folgenden PKW'
                            value={wantedCar}
                            onChange={(e) => setWantedCar(e.target.value)}
                            select
                            SelectProps={{
                                native: true,
                            }}
                        >
                            {Cars.map((car) => (
                                <option key={car.value} value={car.value}>
                                    {car.label}
                                </option>
                            ))}
                        </CustomInputField>
                    </div>
                    <CustomInputField
                        label='Ihre Nachricht*'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        multiline
                        fullWidth
                        rows={10}
                    />
                    <div className={FormStyles.textBox}>
                        <p>Alle Felder die mit einem Sternchen (*) versehen sind, sind Pflichtfelder.</p>
                        <p>Mit dem Abschicken Ihre Anfrage oder Buchung erklären Sie , dass Sie die  Datenschutzerklärung zur Kenntnis genommen<br />haben und mit dieser einverstanden sind.</p>
                    </div>
                </div>
                <DateRangePicker isFieldsTouched={isFieldsTouched} />
            </div>
        </div>
    )
}

export default Form