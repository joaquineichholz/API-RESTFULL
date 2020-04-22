module.exports = (sequelize, Sequelize) => {
    const Hamburguesa = sequelize.define("hamburguesa", {
      nombre: {
        type: Sequelize.STRING
      },
      descripcion: {
        type: Sequelize.STRING
      },
      precio: {
        type: Sequelize.INTEGER
      },
      imagen: {
        type: Sequelize.STRING
      },
    });
  
    return Hamburguesa;
  };