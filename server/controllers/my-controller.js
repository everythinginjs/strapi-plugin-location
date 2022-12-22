'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('strapi-plugin-location')
      .service('myService')
      .getWelcomeMessage();
  },
});
