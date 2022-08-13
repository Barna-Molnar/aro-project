
export interface Button {
    title: string;
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    border: boolean;
}
 export interface Image {
    imgPath: string;
    altText: string;
}

export enum TextPosition {
    Left = 'left',
    Right = 'right',
}

export interface Data {
    title: string | undefined;
    description: { title?: string; paragraph: string }[];
    accordion?: { title: string; paragraph: string }[];
    buttons: Button[];
    img: Image | undefined;
}