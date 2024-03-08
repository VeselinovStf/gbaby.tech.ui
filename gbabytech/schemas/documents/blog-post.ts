import { defineType } from "sanity";
import { baseLanguage } from "../locale";

export default defineType({
    name: 'post',
    title: 'Blog Posts',
    type: 'document',
    fields: [
        {
            name: "title",
            type: "localeString",
            title: "Title",
            validation: Rule =>
                Rule.required()
        },
        {
            name: "description",
            type: "localeString",
            title: "Description",
            validation: Rule =>
                Rule.required()
        },
        {
            title: 'date',
            name: 'date',
            type: 'datetime'
        },
        {
            name: "href",
            type: "string",
            title: "Anchor href to post details"
        },
        {
            name: "navigationItemUrl",
            type: "link",
            title: "Navigation Item URL"
        },
        {
            name: 'author',
            type: 'reference',
            description: 'Author',
            to: { type: 'blog-authors-page' },
        },
        {
            name: 'category',
            type: 'reference',
            description: 'Category',
            to: { type: 'blog-category-page' },
        },
         {
            name: 'prevImage',
            title: 'Prewiew image',
            type: 'image',
            options: {
                hotspot: true,
            },
            description: 'Prewiew image', 
            validation: Rule =>
                Rule.required()
        },
        {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
            description: 'Optional image',
            validation: Rule =>
                Rule.required()
        },
        {
            name: "tags",
            type: "array",
            title: "Tags",
            of: [{ type: "blog-post-tag" }],
            description: 'Blog Post Tags',
        },
        {
            name: "content",
            type: "content",
            title: "Content",
            description: 'Post Content',
        }
    ],
    preview: {
        select: {
            title: `title.${baseLanguage!.id}`
        }
    }
})
