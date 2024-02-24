import { IBlogPostCategory } from "./blog-post-category";
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
    category: IBlogPostCategory;
    mainImage: IImage;
    prevImage: IImage;
    tags: IBlogPostTag[];
    content: any;
}