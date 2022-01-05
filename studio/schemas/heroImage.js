export default {
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

}
