import { defineType } from "sanity";
import { baseLanguage } from "../locale";

export default defineType({
    name: 'blog-post-tag',
    title: 'Post Author',
    type: 'object',
    fields: [
        {
            name: "title",
            type: "localeString",
            title: "Title",
            validation: Rule =>
                Rule.required()
        }
    ],
    preview: {
        select: {
            title: `title.${baseLanguage!.id}`
        }
    }
})
