import { ILocaleString } from "./ilocaleString";
import { IPageContent } from "./ipageContent";

export interface IHomePage {
    title: ILocaleString;
    backgroundImage: string;
    content: IPageContent[]
}