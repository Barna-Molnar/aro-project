import { useState } from 'react';
import FormStyles from '../styles/Form.module.scss';
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
            <div>
                <CustomInputField label='Name*' value={name} onChange={handleChange} />
            </div>


            {/* FlexBox */}

            {/* Column_1 : inputfields + textarea + small description */}
            {/* Column_2 : Calendar ?? if it is needed   + button */}

            {/* FlexBox */}
        </div>
    )
}

export default Form