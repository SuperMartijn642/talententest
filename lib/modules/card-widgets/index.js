module.exports = {
  extend: 'apostrophe-widgets',
  label: 'Card',
  contextualOnly: true,
  addFields: [
    {
      name: 'mycontentarea',
      type: 'area',
      label: 'Content Area',
    },
    {
      name: 'cardimage',
      type: 'singleton',
      widgetType: 'apostrophe-images',
      label: 'CardImage',
      options: {
        limit: 1
      }
    }
  ]
};
