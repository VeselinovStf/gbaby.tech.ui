import { defineType } from "sanity";
import { baseLanguage } from "./locale";

export default defineType({
  name: 'siteConfig',
  type: 'document',
  title: 'Site Settings',
  fields: [
    {
      name: 'title',
      type: 'localeString',
      title: 'Site title',
      validation: Rule =>
        Rule.required()
    },
    {
      title: 'URL',
      name: 'url',
      type: 'url',
      description: 'The main site url.',
    },
    {
      name: 'frontpage',
      type: 'reference',
      description: 'Choose page to be the frontpage',
      to: { type: 'homePage' },
    },
    {
      title: 'Main navigation',
      name: 'mainNav',
      description: 'Select menu for main navigation',
      type: 'reference',
      to: { type: 'navigation' },
    },
    {
      title: 'Address Lines',
      name: 'addressNav',
      description: 'Select menu for Address navigation',
      type: 'reference',
      to: { type: 'navigation' },
    },
    {
      title: 'Social navigation',
      name: 'socialNav',
      description: 'Select menu for social navigation',
      type: 'reference',
      to: { type: 'navigation' },
    },
    {
      title: 'Service navigation',
      name: 'serviceNav',
      description: 'Select menu for Service navigation',
      type: 'reference',
      to: { type: 'navigation' },
    },
    {
      title: 'Quick Link navigation',
      name: 'quickLinkNav',
      description: 'Select menu for Quick-Link navigation',
      type: 'reference',
      to: { type: 'navigation' },
    },
  ],
  preview: {
    select: {
      title: `title.${baseLanguage!.id}`
    }
  }
})
