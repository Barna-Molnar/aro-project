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
                            <h6>{content.title}</h6>
                        }
                        <p>{content.paragraph}</p>
                    </>
                ))
            }
        </>
    )
};

export default DisplayContent;