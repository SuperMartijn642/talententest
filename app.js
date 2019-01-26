var path = require('path');

var apos = require('apostrophe')({
  shortName: 'test-project2',

  // See lib/modules for basic project-level configuration of our modules
  // responsible for serving static assets, managing page templates and
  // configuring user accounts.

  modules: {
    // Apostrophe module configuration
	
    // Any modules that are not present by default in Apostrophe must at
    // least have a minimal configuration here: `moduleName: {}`
	
    //'link-widgets': {},
    //'twocolumn-widgets': {},
    //'threecolumn-widgets': {},
    //'hero-widgets': {},
    //'card-widgets': {},
    //'image-widgets':{},
	
	'banner-widgets': {},
	'banner-two-column-widgets': {},
	'banner-three-column-widgets': {},
	'banner-header-widgets': {},
	//'banner-image-widgets': {},
	//'image-banner-widgets': {},

    'apostrophe-templates': { viewsFolderFallback: path.join(__dirname, 'views') }

  }
});
