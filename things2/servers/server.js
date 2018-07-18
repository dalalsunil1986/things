const Hapi = require("hapi");
const Joi = require("joi");
const Boom = require("boom");
const Sequelize = require("sequelize");
const config = require("lastconf")();
const server = new Hapi.Server({port: config.get("port")});
const migrate = require("./lib/migrate");

const sqldb = new Sequelize(config.get("database"));
/*
sqldb.query("SELECT 2+2 as s", {
	raw: true,
    plain: true,
	type: Sequelize.QueryTypes.SELECT,
}).then(data => {
//	console.info(">> data:", data[0][0].s);
	console.info(">> data:", data.s);
});
*/
server.sqldb = sqldb;

server.route({
	method: "GET",
	path: "/testable/{name}",
	config: {
		validate: {
			params: {
				name: Joi.string().min(2).max(40).alphanum().required()
			}
		},
		handler: function (req, h) {
			return `hey ${req.params.name}`;
		}
	},
});

server.route({
	method: "GET",
	path: "/testable/prohibited/{pass}",
	config: {
		validate: {
			params: {
				pass: Joi.string().min(2).max(40).alphanum().required()
			}
		},
		handler: function (req, h) {
			return req.params.pass === "ok" ? "ok" : Boom.unauthorized("provide valid pass");
		}
	},
});


async function delay (timeout) {
	return new Promise(accept => {
		setTimeout(accept, timeout);
	})
}

server.route({
	method: "GET",
	path: "/api/people",
	config: {
		handler: function (req, h) {
			return server.sqldb.query("SELECT * FROM people", {raw: true, plain: false, type: Sequelize.QueryTypes.SELECT})
				.then(async function (data) {
					// console.info(">> data:", data);
					const t = await delay(2000);
					return data;
				})
				.catch(err => {
					console.info(">> err:", err);
					return Boom.error("errrrrr");
				})
		},
		cors: {
			origin: ['*'],
			additionalHeaders: ['cache-control', 'x-requested-with']
		}
	}
});

server.route({
	method: "POST",
	path: "/api/people",
	config: {
		handler: (req, h) => {
			const {id, name, age} = JSON.parse(req.payload);
			console.info(`>>>`, req.payload);
			return server.sqldb.query("INSERT INTO people VALUES(?, ?, ?)", {replacements: [id, name, age]})
				.then(data => {
					// console.info(">> data:", data);
					return {};
				})
				.catch(err => {
					if (err.name === "SequelizeUniqueConstraintError" && err.errors[0].type === "unique violation" && err.errors[0].path === "id") {
						// console.info(">> id is not unique!!!");
						return server.sqldb.query("SELECT max(id) as id FROM people", {raw: true, plain: true, type: Sequelize.QueryTypes.SELECT})
							.then(data => {
//								console.info(">> data:", data.id+1);
								const error = Boom.notAcceptable("try next id");
								error.reformat();
								error.output.payload.nextAvailableId = data.id+1;
								throw error;
							})
					} else {
						return Boom.badRequest();
					}
				})
		},
		cors: {
			origin: ['*'],
			additionalHeaders: ['cache-control', 'x-requested-with']
		}
	}
});

server.route({
	method: "DELETE",
	path: "/api/people",
	config: {
		handler: (req, h) => {
			const { id } = JSON.parse(req.payload);
			console.info(`>>> deleting`, id);
			return server.sqldb.query("DELETE FROM people WHERE id=?", {replacements: [id]})
				.then(data => {
					return {};
				})
				.catch(err => {
					return Boom.badRequest();
				})
		},
		cors: {
			origin: ['*'],
			additionalHeaders: ['cache-control', 'x-requested-with']
		}
	}
});


const options = {
	ops: {
		interval: 1000
	},
	reporters: {
		myConsoleReporter: [{
            module: 'good-squeeze',
            name: 'Squeeze',
            args: [{log: '*', error: '*', response: '*', request: '*' /*, ops: '*'*/}]
        }, {
            module: 'good-console'
        }, 'stdout']
	}
};

server.register({
	plugin: require("good"),
	options
});


async function startServer() {
	await server.start();
	console.info(`http://localhost:${server.info.port}/testable/name`);
}

new Promise(resolve => {resolve()})
	// .then(migrate)
	.then(startServer)
	.catch(function (err) {
		console.log('Server failed to start due to error: %s', err);
	});

module.exports = server;
