export default {
  name: 'landing-page',
  title: 'Landing Page',
  type: 'document',
  fields: [
    {
      name: 'heroImage',
      title: 'Banner Image and Text',
      type: 'heroImage'
    },
    {
      name: 'servicesOverview',
      title: 'Services Overview',
      type: 'text',
      description: 'First Paragraph overview of services'

    },
    {
      name: 'servicesCards',
      title: 'Cards for services offered',
      type: 'servicesCards'
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
        },
      ],
    },
    {
      name: 'reviews',
      title: 'Reviews',
      type: 'reviews'
    },

    {
      name: 'workImages',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        sortable: true,
      },
      validations: {
        length: 6
      }
    },
    {
      name: 'contactInfo',
      title: 'Contact Info',
      type: 'contactInfo'
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },

}
