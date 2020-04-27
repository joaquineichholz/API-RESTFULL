const KoaRouter = require('koa-router');
const db = require("../models");

const router = new KoaRouter();


// GET Burguers
router.get('burgers', '/', async (ctx) => {

    const burgers = await ctx.orm.burger.findAll();
    console.log(burgers);

    ctx.response.body = burgers;
    ctx.response.status = 200;
 });


// POST new Hamburger
router.post('burgers', '/', async (ctx) => {
    // Validate request
    /* if (!req.body.title) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }
    */
      // Create a Hamburger
      console.log("crear hamburguesa")
      const hamburger = {
        name: ctx.request.body.nombre,
        description: ctx.request.body.descripcion,
        price: ctx.request.body.precio,
        image: ctx.request.body.imagen
      };
      
      console.log("parametros: ", hamburger)
    
      // Save Hamburger in the database
      const new_burger = ctx.orm.burger.build(hamburger);
      ctx.assert('new_burger', 200, 'logrado');


    });

module.exports = router;

/*
router.get('burgers', '/', async (ctx) => {
  ctx.orm.burger.findAll(req, res);

  .then(data => {
    console.log("200")
    res.status(200).send(data);
  })
  .catch(err => {
    console.log("500 error -- :(")
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving hamburgers."
    });
  });

  //await ctx.render('burgers/index', { burgers });
});

module.exports = router;
*/
 