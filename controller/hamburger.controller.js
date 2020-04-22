const db = require("../models");
const Hamburger = db.hamburguesa;
const Op = db.Sequelize.Op;

// POST new Hamburger
exports.create = (req, res) => {
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
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    precio: req.body.precio,
    imagen: req.body.imagen
  };
  
  console.log("parametros: ", hamburger)

  // Save Hamburger in the database
  Hamburger.create(hamburger)
    .then(data => {
        console.log("201")
        res.status(201).send(data);
    })
    .catch(err => {
        console.log("400")
        res.status(400).send({
        message:
          err.message || "input invalido"
      });
    });
};

// GET ALL Hamburgers from the database.
exports.findAll = (req, res) => {
    console.log("GET todas")
    Hamburger.findAll()
      .then(data => {
        console.log("200")
        res.status(200).send(data);
      })
      .catch(err => {
        console.log("500")
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving hamburgers."
        });
      });
  };

// GET ONE Hamburger with an id
exports.findOne = (req, res) => {
  console.log('GET ONE')
    if (!req.params.id) {
        res.status(400).send({
          message: "id invalido"
        });
        return;
      }

    const id = req.params.id;
  
    Hamburger.findByPk(id)
      .then(data => {
        console.log("return findByPk ", data)

        if (data) {
            res.status(200).send(data);
            console.log("200")

          } else {
            console.log("404 else")
            res.status(404).send({
              message: "hamburguesa inexistente" 
            });
          }
      })
      .catch(err => {
        console.log("404 error")
        res.status(404).send({
          message: "hamburguesa inexistente" // revisar si es un error no encontrar la hamburguesa 
        });
      });
  };

// PATCH a Hamburger by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    const keys = Object.keys(req.body);    
    for (var i = 0; i < keys.length; i++){
      if (!['nombre', 'precio', 'descripcion', 'imagen'].includes(keys[i])) {
        res.status(400).send("parametros invalidos");
        return
      }
    }

   
    Hamburger.update(req.body, {
      where: { id: id }
    })
      .then(num => {
          console.log("return de update num:", num)
        if (num == 1) {
            Hamburger.findByPk(id)
            .then(data => {
              res.status(200).send(data);
            })
        } else {
            console.log("404")
          res.status(404).send('Hamburguesa inexistente');
        }
      })
      .catch(err => {
        console.log("400")
        res.status(400).send( "Parámetros inválidos");
      });
  };

// DELETE a Hamburger with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Hamburger.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
            console.log("200")
            res.status(200).send({
            message: "Hamburguesa retirada"
          });
        } else {
            console.log("404 else")
          res.status(404).send({
            message: `hamburguesa inexistente`
          });
        }
      })
      .catch(err => {
        console.log("404")
        res.status(404).send({
          message: "hamburguesa inexistente"
        });
      });
  };

// ------- DELETE INGREDINTE a Hamburger with the specified id in the request ------


// Delete all Hamburgers from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Hamburgers
exports.findAllPublished = (req, res) => {
  
};