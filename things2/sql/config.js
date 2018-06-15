const fs = require("fs");

module.exports = {
	"development": {
		"database": "things-test",
		"dialect": "postgres",
		"migrationStorage": "json",
		"migrationStoragePath": "migrations-development.json"
	},
};
