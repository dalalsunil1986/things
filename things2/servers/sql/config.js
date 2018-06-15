const fs = require("fs");
const _ = require("lodash");

const conf = require("lastconf")();

console.info(">> conf", conf.json());
const env = process.env.NODE_ENV || "development";

const sequelizeConfig = _.merge({
	// "database": "things-test",
	// "dialect": "postgres",
	"migrationStorage": "json",
	"migrationStoragePath": `servers/sql/migrations-${env}.json`,
}, conf.get("database"));

console.info(">>>", sequelizeConfig);

module.exports = sequelizeConfig;
