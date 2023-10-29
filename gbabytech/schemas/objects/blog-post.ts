import { defineType } from "sanity";
import { baseLanguage } from "../locale";

export default defineType({
    name: 'post',
    title: 'Post',
    type: 'object',
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
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
            description: 'Optional image',
        },
        {
            name: "tags",
            type: "array",
            title: "Tags",
            of: [{ type: "blog-post-tag" }],
            description: 'Blog Post Tags',
        }
    ],
    preview: {
        select: {
            title: `title.${baseLanguage!.id}`
        }
    }
})
