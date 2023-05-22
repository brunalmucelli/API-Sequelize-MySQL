'use strict'

const pessoas = require('./pessoas')

module.exports = (sequelize, DataTypes) => {
  const Niveis = sequelize.define('Niveis', {
    descr_nivel: DataTypes.STRING
  }, {paranoid : true})
  Niveis.associate = function(models) {
    Niveis.hasMany(models.Turmas, {
      foreignKey: 'nivel_id'
    })
  }
  return Niveis
}

//ALTER TABLE pessoas AUTO_INCREMENT = 1;  

//DBCC CHECKIDENT (Pessoa, RESEED, 0)

