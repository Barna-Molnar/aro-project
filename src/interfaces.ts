
interface Button {
    title: string;
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    border: boolean;
}
interface Image {
    imgPath: string;
    altText: string;
}


export interface Data {
    title: string | undefined;
    description: Array<{ title: string | undefined; paragraph: string }>;
    accordion: Array<{ title: string; paragraph: string }> | undefined;
    buttons: Array<Button>;
    img: Image | undefined
}