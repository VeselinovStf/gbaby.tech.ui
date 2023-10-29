import { defineType } from "sanity";

export default defineType({
    name: 'pageContent',
    title: 'Page Content',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            description: 'Element name',
        },
        {
            name: 'title',
            title: 'Title',
            type: 'localeString',
            description: 'Element main HEADER text',
        },
        {
            name: 'text',
            title: 'Text',
            type: 'localeString',
            description: 'Descriptive SMALL text',
        },
        {
            name: 'display',
            title: 'Display',
            type: 'boolean',
            description: 'Turn on to make this content part of website',
        },
        {
            name: 'key',
            title: 'Key',
            type: 'string',
            description: 'Backend key for loading this element',
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
        },
        {
            name: "buttonText",
            type: "localeString",
            title: "Button Text",
            description: 'Optional Button text',
        },
        {
            name: "buttonHREF",
            type: "string",
            title: "Button Href",
            description: 'Optional Button Hypertext reference',
        },
        {
            name: "boxItems",
            type: "array",
            title: "Box Items",
            of: [{ type: "boxItem" }],
            description: 'Optional List of elements'
        }
    ],

    preview: {
        select: {
            title: 'name',
            media: 'mainImage',
        },
    },
})
