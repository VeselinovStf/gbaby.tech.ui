import { ILocaleString } from "./ilocaleString";
import { INavbar } from "./inavbar";

export interface INav {
    title: ILocaleString;
    items: INavbar[]; 
}