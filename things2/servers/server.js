const Hapi = require("hapi");
const Joi = require("joi");
const Boom = require("boom");
const server = new Hapi.Server({port: 3333});
const migrate = require("./lib/migrate");

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


async function startServer() {
	await server.start();
	console.info(`http://localhost:${server.info.port}/testable/name`);
}

new Promise(migrate)
  .then(startServer)
  .catch(function (err) {
    console.log('Server failed to start due to error: %s', err);
  });

module.exports = server;
