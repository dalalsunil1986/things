const config = require("lastconf")();

console.info(">> conf:", config.json());
console.info(">> NODE_ENV:", process.env.NODE_ENV);
