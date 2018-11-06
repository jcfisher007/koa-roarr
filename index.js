var uuidv4 = require("uuid/v4");

var logger = ({
  log,
  inMsg = "http request",
  outMsg = "http response"
}) => async (ctx, next) => {
  var { request, response } = ctx;
  var requestId = request.headers["x-request-id"] || `s-${uuidv4()}`;
  ctx.log = log.child({ requestId });
  var { trace } = ctx.log;
  trace({ request }, inMsg);
  await next();
  trace({ response }, outMsg);
};

module.exports = logger;
