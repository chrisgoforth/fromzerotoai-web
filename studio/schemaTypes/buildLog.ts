import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'buildLog',
  title: 'Build Log',
  type: 'document',
  fields: [
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'text',
      validation: Rule => Rule.required(),
    }),
  ],
})
