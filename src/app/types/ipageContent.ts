import { IBoxItem } from "./iboxItem";
import { IImage } from "./iimage";
import { ILocaleString } from "./ilocaleString";

export interface IPageContent {
    title: ILocaleString;
    text: ILocaleString;
    key: string;
    display: boolean;
    mainImage: IImage;
    buttonText: ILocaleString;
    buttonHREF: string;
    boxItems: IBoxItem[]
}