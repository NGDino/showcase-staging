export default {
  name: 'landing-page',
  title: 'Landing Page',
  type: 'document',
  fields: [
    {
      name: 'heroImage',
      title: 'Banner Image',
      type: 'image',
      description: 'The image that will be your header for the site.',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'headline',
          type: 'string',
          title: 'headline',
          description: 'Biggest text area on banner'
        },
        {
          name: 'descriptor',
          type: 'string',
          title: 'descriptor',
          description: 'The text that will go above headline.'
        },
        {
          name: 'tagline',
          type: 'string',
          title: 'Tagline',
          description: 'The text that will go below headline.'
        }
      ]
    },
    {
      name: 'servicesOverview',
      title: 'Services Overview',
      type: 'text',
      description: 'First Paragraph overview of services'
      
    },
    {
      name: 'servicesCards',
      title: 'Services Cards',
      type: 'array',
      description: 'The cards for your services.  Only Enter 3',
      of: [
        {
          type: 'object',
          name: 'cardInfo',
          fields: [
            {name: 'serviceTitle', type: 'string', title: 'Service Title'},
            {name: 'serviceDescription', type: 'string', title: 'Service Description'}
          ]
        }
      ]
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        },
      ],
    },
    {
      name: 'reviews',
      title: 'Reviews',
      type: 'array',
      description: 'The image and text for your reviews',
      of: [
        {
          type: 'object',
          name: 'reviewInfo',
          fields: [
            {name: 'reviewImage', type: 'image', title: 'Review Image'},
            {name: 'reviewText', type: 'string', title: 'Review Text'}
          ]
        }
      ]
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },

}
