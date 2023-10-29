import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'gbaby.tech',

  projectId: '9eoskxyk',
  dataset: 'gbaby_tech',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
