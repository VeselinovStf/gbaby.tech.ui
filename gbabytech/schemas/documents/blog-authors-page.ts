import { defineType } from "sanity";
import { baseLanguage } from "../locale";

export default defineType({
    name: 'blog-authors-page',
    title: 'Authors',
    type: 'document',
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
            title: `name.${baseLanguage!.id}`
        }
    }
})
