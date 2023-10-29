import { IBlogPostAuthor } from "./iblog-post-author";
import { IBlogPostTag } from "./iblog-post-tag";
import { IImage } from "./iimage";
import { ILocaleString } from "./ilocaleString";

export interface IBlogPost {
    title: ILocaleString;
    description: ILocaleString;
    href: string;
    date: Date;
    author: IBlogPostAuthor;
    mainImage: IImage;
    tags: IBlogPostTag[];
}