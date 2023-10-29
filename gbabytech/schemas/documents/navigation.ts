
import { defineType } from "sanity";
import { baseLanguage } from "../locale";

export default defineType({
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  fields: [
    {
      name: "title",
      type: "localeString",
      title: "Navigation Title",
      description: 'Displayed Navigation/Site Title/Logo',
      validation: Rule =>
          Rule.required()
    },
    {
      name: "items",
      type: "array",
      title: "Navigation items",
      of: [{ type: "navigationItem" }],
      description: 'Navigation items/links',
    }
  ], preview: {
    select: {
      title: `title.${baseLanguage!.id}`
    }
  }
})
