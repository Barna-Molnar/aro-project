
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
    title?: string;
    description: { title?: string; paragraph: string }[];
    accordion?: { title: string; paragraph: string }[];
    buttons: Button[];
    img?: Image
}