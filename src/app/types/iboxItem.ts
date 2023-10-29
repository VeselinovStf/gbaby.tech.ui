import { IImage } from "./iimage";
import { ILocaleString } from "./ilocaleString";

export interface IBoxItem {
    title: ILocaleString;
    text: ILocaleString;
    icon: string;
    link: string;
    image: IImage;
}