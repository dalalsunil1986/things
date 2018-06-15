const lab = exports.lab = require("lab").script();
const Code = require("code");
const server = require("../servers/server");

lab.experiment("Basic HTTP", () => {
	lab.test("GET testable", async function() {
		const options = {
			method: "GET",
			url: "/testable/abc"
		};
		const response = await server.inject(options);
		Code.expect(response.statusCode).to.equal(200);
	});
});

lab.experiment("Auth", () => {
	lab.test("Failed auth", async function() {
		const options = {
			method: "GET",
			url: "/testable/prohibited/abc"
		};
		const response = await server.inject(options);
		Code.expect(response.statusCode).to.equal(401);
	});

	lab.test("Ok auth", async function() {
		const options = {
			method: "GET",
			url: "/testable/prohibited/ok"
		};
		const response = await server.inject(options);
		Code.expect(response.statusCode).to.equal(200);
	});
});
