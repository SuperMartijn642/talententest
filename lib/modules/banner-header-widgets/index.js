module.exports = {
	extend: 'apostrophe-widgets',
	label: 'Header',
	contextualOnly: true,
	addFields: [
		{
			type: 'singleton',
			name: 'text',
			label: 'Text'
		},
		{
			type: 'area',
			name: 'content',
			label: 'Content'
		}
	]
}
