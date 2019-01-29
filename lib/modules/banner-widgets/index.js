module.exports = {
	extend: 'apostrophe-widgets',
	label: 'Banner',
	addFields: [
		{
			type: 'color',
			name: 'color',
			label: 'Color',
			required: false
		},
		{
			type: 'area',
			name: 'content',
			label: 'Content',
			hidden: true
		}
	]
}