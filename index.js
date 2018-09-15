var uuidv4 = require("uuid/v4");

var logger = ({ log }) => async (ctx, next) => {
  var { request, response } = ctx;
  var requestId = ctx.request.headers["x-request-id"] || `s-${uuidv4()}`;
  ctx.log = log.child({ requestId });
  await next();
  ctx.log.info({ request, response }, "request complete");
};

module.exports = logger;
