import ComponentStyles from '../styles/ComponentStyles.module.scss';
import Divider from './Divider';
import Accordion from './Accordion';
import Button from './Button';
import DisplayContent from './DisplayContent';
import { FC } from 'react';
import { Data } from '../interfaces';


interface MainComponentProps {
    data: Data
    textPosition: 'left' | 'right'
}
const MainComponent: FC<MainComponentProps> = (props) => {
    return (
        <div className={ComponentStyles.container}>
            <div className={`${props.textPosition === 'right'
                ? ComponentStyles.rightTitleWrapper
                : ComponentStyles.leftTitleWrapper
                }`}
            >
                <h2 className={ComponentStyles.title}>{props.data.title}</h2>
                <Divider />
            </div>
            <div className={`${props.textPosition === 'right'
                ? ComponentStyles.boxContentRight
                : ComponentStyles.boxContentLeft
                }`}
            >
                <div className={ComponentStyles.infoWrapper}>
                    <div className={ComponentStyles.descriptionWrapper}>
                        <DisplayContent content={props.data.description} />
                    </div>

                    {props.data.accordion && <Accordion contents={props.data.accordion} />}

                    <div className={ComponentStyles.actionBtnWrapper}>
                        {props.data.buttons.map(({ border, title, icon: Icon }) => (
                            <Button border={border} title={title} icon={<Icon />} />
                        ))}
                    </div>
                </div>
                <div className={ComponentStyles.imageWrapper}>
                    {props.data.img && <img src={props.data.img?.imgPath} alt={props.data.img?.altText} />}
                </div>
            </div>
        </div>
    )
}

export default MainComponent
