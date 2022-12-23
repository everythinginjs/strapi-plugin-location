"use strict";

module.exports = ({ strapi }) => {
  strapi.customFields.register({
    name: "location",
    plugin: "strapi-plugin-location",
    type: "json",
  });
};
