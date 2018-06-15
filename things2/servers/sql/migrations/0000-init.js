"use strict";

const Promise = require("bluebird");

module.exports = {
	up: (q, S) => {
		const sqls = [
			`CREATE TABLE pairs (
				id INTEGER NOT NULL PRIMARY KEY,
				key TEXT,
				VALUE TEXT
			)`,
		];
		return Promise.map(sqls, (sql) => (
			q.sequelize.query(sql)
		));
	},
	down: (q, S) => {
		const sqls = [
			`DROP TABLE pairs`
		];
		return Promise.map(sqls, (sql) => (
			q.sequelize.query(sql)
		));
	},
};
