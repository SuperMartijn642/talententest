// Settings specific to this server. Change the URL
// if you are deploying in production. Then copy to
// data/local.js. That folder is shared by all
// deployments in our stagecoach recipe

module.exports = {
  modules: {
    'apostrophe-assets': {
      // Set to true for full CSS and JS minify, on staging and production servers
      // minify: true
    },
    // If these are your db settings then you don't need to be explicit. If not
    // you can uncomment this and get more specific.
    'apostrophe-db': {
      // uri: 'mongodb://apostrophe_user:Rutger4433@bnsclusterrp-shard-00-00-jilrl.gcp.mongodb.net:27017,bnsclusterrp-shard-00-01-jilrl.gcp.mongodb.net:27017,bnsclusterrp-shard-00-02-jilrl.gcp.mongodb.net:27017/test?ssl=true&replicaSet=BNSClusterRP-shard-0&authSource=admin&retryWrites=true'
      // There is legacy support for host, port, name, user and password options,
      // but this is not necessary. They can all go in the uri option like this:
      // mongodb://user:password@host:port/dbname
    }
    
    
    
  }
};
