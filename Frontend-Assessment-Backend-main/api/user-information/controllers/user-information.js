"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async create(ctx) {
    try {
      const newEntry = await strapi.services["user-information"].create(
        ctx.request.body
      );
      ctx.send({ response: "User created successfully", data: newEntry });
    } catch (err) {
      ctx.throw(500, err);
    }
  },
};
