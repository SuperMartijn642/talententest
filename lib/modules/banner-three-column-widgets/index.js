module.exports = {
	extend: 'apostrophe-widgets',
	label: 'Three Columns',
	contextualOnly: true,
	addFields: [
		{
			type: 'area',
			name: 'left',
			label: 'Content',
			options: {
				widgets: {
					'apostrophe-images': {},
					'apostrophe-rich-text': {
						toolbar: [ 'Styles', 'Bold', 'Italic', 'Link', 'Unlink', 'Table', 'BulletedList', 'Blockquote' ],
						styles: [
							{ name: 'Heading', element: 'h1' },
							{ name: 'Subheading', element: 'h2' },
							{ name: 'Paragraph', element: 'p' }
						]
					}
				}
			}
		},
		{
			type: 'area',
			name: 'right',
			label: 'Content',
			options: {
				widgets: {
					'apostrophe-images': {},
					'apostrophe-rich-text': {
						toolbar: [ 'Styles', 'Bold', 'Italic', 'Link', 'Unlink', 'Table', 'BulletedList', 'Blockquote' ],
						styles: [
							{ name: 'Heading', element: 'h1' },
							{ name: 'Subheading', element: 'h2' },
							{ name: 'Paragraph', element: 'p' }
						]
					}
				}
			}
		}
	]
}