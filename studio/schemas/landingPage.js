export default {
  name: 'landing-page',
  title: 'Landing Page',
  type: 'document',
  fields: [
    {
      name: 'nav-items',
      title: 'Nav Items',
      type: 'array',
      description: '',
      of: [{type: 'string'}]
    },
    {
      name: 'hero-image',
      title: 'Banner Image',
      type: 'image',
      description: 'The image that will be your header for the site.',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'tagline',
          type: 'string',
          title: 'Tagline',
          description: 'The text that will go in your header.'
        }
      ]
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'The about section of your business'
      
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
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}
