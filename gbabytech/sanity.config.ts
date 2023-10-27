import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'gbaby.tech',

  projectId: '8i2jrar2',
  dataset: 'gbaby_tech_blog',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
