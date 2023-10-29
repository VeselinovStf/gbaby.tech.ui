import { defineType } from "sanity";

export default defineType({
    name: 'page',
    title: 'Pages',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'backgroundImage',
        title: 'Background image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'display',
        title: 'Display',
        type: 'boolean',
      },
      {
        name: 'content',
        title: 'Content',
        type: 'pageContent',
      },
      {
        name: "boxItems",
        type: "array",
        title: "Box Items",
        of: [{ type: "boxItem" }]
      }
    ],
  
    preview: {
      select: {
        title: 'title',
        media: 'mainImage',
      },
    },
})
