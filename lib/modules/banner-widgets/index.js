module.exports = {
	extend: 'apostrophe-widgets',
	label: 'Banner',
	contextualOnly: true,
	addFields: [
		{
			type: 'area',
			name: 'content',
			label: 'Content'
		}
	]
}