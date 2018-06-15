'use strict';
module.exports = (sequelize, DataTypes) => {
  var test2 = sequelize.define('test2', {
    value: DataTypes.STRING
  }, {});
  test2.associate = function(models) {
    // associations can be defined here
  };
  return test2;
};