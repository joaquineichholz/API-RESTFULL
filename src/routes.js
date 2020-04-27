const KoaRouter = require('koa-router');

const hello = require('./routes/hello');
const index = require('./routes/index');
const burgers = require('./routes/burger');

const router = new KoaRouter();

router.use('/', index.routes());
router.use('/burger', burgers.routes());

module.exports = router;
