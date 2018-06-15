'use strict';
module.exports = (sequelize, DataTypes) => {
  var test1 = sequelize.define('test1', {
    // id: DataTypes.INTEGER,
    value: DataTypes.STRING
  }, {});
  test1.associate = function(models) {
    // associations can be defined here
  };
  return test1;
};