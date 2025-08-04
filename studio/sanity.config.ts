import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

// Import your new schema type
import buildLog from './schemaTypes/buildLog'

export default defineConfig({
  name: 'default',
  title: 'Galtline',

  projectId: 'my09eu0a',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    // Combine the auto-generated types with your buildLog
    types: schemaTypes.concat([buildLog]),
  },
})
