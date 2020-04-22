module.exports = app => {
    const hamburgers = require("../controller/hamburger.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Hamburger
    router.post("/", hamburgers.create);
  
    // Retrieve all Hamburgers
    router.get("/", hamburgers.findAll);

    // Retrieve a single Hamburger with id
    router.get("/:id", hamburgers.findOne);
  
    // Update a Hamburger with id
    router.patch("/:id", hamburgers.update);
  
    // Delete a Hamburger with id
    router.delete("/:id", hamburgers.delete);
  
    // Create a new Hamburger
    router.delete("/", hamburgers.deleteAll);
  
    app.use('/api/hamburguesa', router);
  };