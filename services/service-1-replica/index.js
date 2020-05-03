var Koa = require('koa');
var Router = require('koa-router');
var bodyParser = require('koa-body');

var app = new Koa();
var router = new Router();

app.use(bodyParser({  
  multipart: true,
  urlencoded: true
}));

router.get('/welcome', (ctx, next) => {  
  ctx.body = {
    message: "Example microservice 1 (replica) - Welcome path"
  };
});

app
  .use(router.routes())
  .use(router.allowedMethods());


app.listen(3001);