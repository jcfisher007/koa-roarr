var uuidv4 = require("uuid/v4");

var logger = ({
  log,
  inMsg = "http request",
  outMsg = "http response"
}) => async (ctx, next) => {
  var { request, response } = ctx;
  var requestId = ctx.request.headers["x-request-id"] || `s-${uuidv4()}`;
  ctx.log = log.child({ requestId });
  ctx.log.info({ request }, inMsg);
  await next();
  ctx.log.info({ response }, outMsg);
};

module.exports = logger;
