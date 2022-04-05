export default {
    type: 'object',
    name: 'about',
    fields: [
        { name: 'smallDescription', type: 'string', title: 'Smaller about description' },
        { name: 'title', type: 'string', title: 'Bold Title', description: 'The large title above the large paragraph' },
        { name: 'bio', type: 'text', title: 'Large Biography Section' },
        { name: 'photo', type: 'image', title: 'About Sectio n Photo', options: { hotspot: true } }
    ]

}