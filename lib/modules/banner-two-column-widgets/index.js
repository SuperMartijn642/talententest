module.exports = {
	extend: 'apostrophe-widgets',
	label: 'Two Columns',
	contextualOnly: true,
	addFields: [
		{
			type: 'area',
			name: 'left',
			label: 'Content'
		},
		{
			type: 'area',
			name: 'center',
			label: 'Content'
		},
		{
			type: 'area',
			name: 'right',
			label: 'Content'
		}
	]
}