import navigation from "./documents/navigation";
import link from "./objects/link";
import blogPost from "./objects/blog-post";
import blogTag from "./objects/blog-post-tag";
import blogAuthor from "./objects/blog-post-author";
import navItem from "./objects/navItem";
import page from "./documents/page";
import siteConfig from "./siteConfig";
import pageContent from "./documents/pageContent";
import boxItem from "./objects/boxItem";
import homePage from "./documents/home-page";
import blogAuthorsPage from "./documents/blog-authors-page";
import blogPage from "./documents/blog-page";
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
    localeString,
    blogPage,
    blogPost,
    blogTag,
    blogAuthor,
    blogAuthorsPage
]
