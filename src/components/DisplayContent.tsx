import { FC } from 'react';
interface Content {
    content: Array<{ title?: string, paragraph: string }>;
};

const DisplayContent: FC<Content> = (props) =>
    <>
        {
            props.content.map((content, index) => (
                <div key={index}>
                    {content.title &&
                        <h4>{content.title}</h4>
                    }
                    <p>{content.paragraph}</p>
                </div>
            ))
        }
    </>;


export default DisplayContent;