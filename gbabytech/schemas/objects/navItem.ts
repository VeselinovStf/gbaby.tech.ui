import { defineType } from "sanity";
import { baseLanguage } from "../locale";

export default defineType({
    name: 'navigationItem',
    title: 'Navigation Item',
    type: 'object',
    fields: [
        {
            name: "text",
            type: "localeString",
            title: "Navigation Text",
            validation: Rule =>
                Rule.required()
        },
        {
            name: "internalHref",
            type: "string",
            title: "Internal Site Reference KEY"
        },
        {
            name: "navigationItemUrl",
            type: "link",
            title: "Navigation Item URL"
        },
        {
            name: 'icon',
            title: 'Icon',
            type: 'string',
        }
    ],
    preview: {
        select: {
            title: `text.${baseLanguage!.id}`
        }
    }
})
