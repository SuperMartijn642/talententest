module.exports = {
  extend: 'apostrophe-widgets',
  label: 'CustomImage',
  addFields: [
    {
      name: '_image',
      type: 'joinByOne',
      withType: 'apostrophe-image',
      label: 'Image',
      required: true,
      idField: 'imageId',
      filters: {
        projection: {
          attachment: true,
          description: true,
          title: true
        }
      }
    }
  ]
};
