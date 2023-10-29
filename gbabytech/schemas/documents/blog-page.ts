
import { defineType } from "sanity";
import { baseLanguage } from "../locale";

export default defineType({
    name: 'blog-page',
    title: 'Blog',
    type: 'document',
    fields: [
        {
            name: "title",
            type: "localeString",
            title: "Title",
            description: 'Title of this page',
            validation: Rule =>
                Rule.required()
        },
        {
            name: "posts",
            type: "array",
            title: "Posts",
            of: [{ type: "post" }],
            description: 'Posts',
        }
    ], preview: {
        select: {
            title: `title.${baseLanguage!.id}`
        }
    }
})
