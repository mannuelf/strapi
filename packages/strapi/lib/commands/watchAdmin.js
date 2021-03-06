// eslint-disable-next-line node/no-extraneous-require
const strapiAdmin = require('strapi-admin');
const { getConfigUrls } = require('strapi-utils');

const loadConfiguration = require('../core/app-configuration');
const addSlash = require('../utils/addSlash');

module.exports = async function() {
  const dir = process.cwd();

  const config = loadConfiguration(dir);

  const { serverUrl, adminPath } = getConfigUrls(config.get('server'), true);

  const adminPort = config.get('server.admin.port', 8000);
  const adminHost = config.get('server.admin.host', 'localhost');
  const adminWatchIgnoreFiles = config.get('server.admin.watchIgnoreFiles', []);

  strapiAdmin.watchAdmin({
    dir,
    port: adminPort,
    host: adminHost,
    options: {
      backend: serverUrl,
      publicPath: addSlash(adminPath),
      watchIgnoreFiles: adminWatchIgnoreFiles,
    },
  });
};
