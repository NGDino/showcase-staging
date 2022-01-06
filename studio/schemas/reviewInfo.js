export default {
    type: 'object',
    name: 'reviewInfo',
    fields: [
        { name: 'name', type: 'string', title: 'Reviewer Name' },
        { name: 'reviewImage', type: 'image', title: 'Review Image' },
        { name: 'reviewText', type: 'string', title: 'Review Text' }
    ]
}