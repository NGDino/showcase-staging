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
      name: 'about',
      title: 'About Section',
      type: 'about',
      description: 'The about section of your business'
    },
    {
      name: 'workDescription',
      type: 'string',
      title: 'Work Description',
      description: 'The small paragraph above work photos'
    },

    {
      name: 'workImages',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        sortable: true,
      },
    },
    {
      name: 'reviews',
      title: 'Reviews',
      type: 'reviews'
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
