import { defineType } from "sanity";
import { baseLanguage } from "../locale";

export default defineType({
    name: 'blog-post-author',
    title: 'Post Author',
    type: 'object',
    fields: [
        {
            name: "name",
            type: "localeString",
            title: "Name",
            validation: Rule =>
                Rule.required()
        }
    ],
    preview: {
        select: {
            title: `text.${baseLanguage!.id}`
        }
    }
})
