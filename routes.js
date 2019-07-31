const routes = require('next-routes')();


routes
.add('/donations/new','/donations/new');
routes
.add('/donations/:address', '/donations/show');

module.exports = routes ;