import navigation from "./documents/navigation";
import link from "./objects/link";
import navItem from "./objects/navItem";
import page from "./documents/page";
import siteConfig from "./siteConfig";
import pageContent from "./documents/pageContent";
import boxItem from "./objects/boxItem";
import homePage from "./documents/home-page";
import { localeString } from "./locale";


export const schemaTypes = [
    navigation,
    link,
    navItem,
    page,
    siteConfig,
    pageContent,
    boxItem,
    homePage,
    localeString
]
