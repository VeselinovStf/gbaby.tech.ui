import { defineType } from "sanity";

export default defineType({
    name: 'homePage',
    title: 'Home Page',
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
        type: 'string',
      },
      {
        name: "content",
        type: "array",
        title: "Home page elements",
        of: [{ type: "pageContent" }],
        description: 'Page Content Elements on home page',
      }
    ],
  
    preview: {
      select: {
        title: 'title'
      },
    },
})
