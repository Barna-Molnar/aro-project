import ComponentStyles from '../styles/ComponentStyles.module.scss';
import Divider from './Divider';
import Accordion from './Accordion';
import Button from './Button';
import DisplayContent from './DisplayContent';
import { FC } from 'react';
import { Button as IButton, Image } from '../interfaces';


interface SectionProps {
    title?: string;
    description: { title?: string; paragraph: string }[];
    accordion?: { title: string; paragraph: string }[];
    buttons: IButton[];
    img?: Image
    textPosition: 'left' | 'right',
    onScrollToBottom: () => void
}
const Section: FC<SectionProps> = (props) => {
    return (
        <div className={ComponentStyles.container}>
            <div className={`${props.textPosition === 'right'
                ? ComponentStyles.rightTitleWrapper
                : ComponentStyles.leftTitleWrapper
                }`}
            >
                <h2 className={ComponentStyles.title}>{props.title}</h2>
                <Divider />
            </div>
            <div className={`${props.textPosition === 'right'
                ? ComponentStyles.boxContentRight
                : ComponentStyles.boxContentLeft
                }`}
            >
                <div className={ComponentStyles.infoWrapper}>
                    <div className={ComponentStyles.descriptionWrapper}>
                        <DisplayContent content={props.description} />
                    </div>

                    {props.accordion && <Accordion contents={props.accordion} />}

                    <div className={ComponentStyles.actionBtnWrapper}>
                        {props.buttons.map(({ border, title, icon: Icon }, index) => (
                            <Button
                                key={index}
                                border={border}
                                title={title}
                                icon={<Icon />}
                                onClick={() => { props.onScrollToBottom(); }}
                            />
                        ))}
                    </div>
                </div>
                <div className={ComponentStyles.imageWrapper}>
                    {props.img && <img src={props.img.imgPath} alt={props.img.altText} />}
                </div>
            </div>
        </div>
    )
}

export default Section
