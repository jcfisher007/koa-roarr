# koa-roarr

Adds ctx.log with structured json loadding based on roarr.

## Example:

```
var App = require("koa");
var log = require("koa-roarr");
var app = new App();

app.use(roarr({ log }));
```
