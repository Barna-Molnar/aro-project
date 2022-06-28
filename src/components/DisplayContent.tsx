import { FC } from 'react';

interface Content {
    content: Array<{ title: string | undefined, paragraph: string }>;
};

const DisplayContent: FC<Content> = (props) => {
    return (
        <>
            {
                props.content.map((content) => (
                    <>
                        {content.title &&
                            <h4>{content.title}</h4>
                        }
                        <p>{content.paragraph}</p>
                    </>
                ))
            }
        </>
    )
};

export default DisplayContent;