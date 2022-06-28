import FormStyles from '../styles/Form.module.scss';
import Divider from './Divider';

const Form = () => {
    return (
        <div className={FormStyles.container}>
            <div className={FormStyles.titleWrapper}>
                <h2 className={FormStyles.title}>Anfrage</h2>
                <Divider />
            </div>


            {/* FlexBox */}

            {/* Column_1 : inputfields + textarea + small description */}
            {/* Column_2 : Calendar ?? if it is needed   + button */}

            {/* FlexBox */}
        </div>
    )
}

export default Form