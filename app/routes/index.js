const wineRoutes = require('./wine_routes');

module.exports = function(app, db) {
  wineRoutes(app, db);
};