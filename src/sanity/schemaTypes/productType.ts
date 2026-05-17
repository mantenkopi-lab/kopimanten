import {defineField, defineType} from 'sanity'

export const productType = defineType({
  name: 'product',
  title: 'Menu Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Menu Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Product Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'variants',
      title: 'Size & Price Variants',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'size',
              title: 'Size (e.g. 250ml, 500ml, Cup)',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'price',
              title: 'Price (IDR)',
              type: 'number',
              validation: (rule) => rule.required().min(0),
            }),
          ],
          preview: {
            select: {
              title: 'size',
              subtitle: 'price',
            },
            prepare({title, subtitle}) {
              return {
                title: title,
                subtitle: `IDR ${subtitle}`,
              }
            },
          },
        },
      ],
    }),
  ],
})
