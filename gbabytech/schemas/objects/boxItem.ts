import { defineType } from "sanity";

export default defineType({
    name: 'boxItem',
    title: 'Box Item',
    type: 'object',
    fields: [
        {
            name: "name",
            type: "string",
            title: "Name",
            validation: Rule =>
                Rule.required()
        },
        {
            name: "title",
            type: "localeString",
            title: "Box Title",
            validation: Rule =>
                Rule.required()
        },
        {
            name: "text",
            type: "localeString",
            title: "Box Text"
        },
        {
            name: "icon",
            type: "string",
            title: "Box Icon"
        },
        {
            name: "link",
            type: "string",
            title: "Box Link"
        },
        {
            name: "image",
            type: 'image',
            options: {
                hotspot: true,
            },
        }
    ],
    preview: {
        select: {
            title: `name`
        }
    }
})
