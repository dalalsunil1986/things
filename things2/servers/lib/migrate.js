// create database "things-test";

const migrate = function (resolve, reject) {
  // const DBUri = app.config.sequelize.uri;
  // const DBUri = "postgres://postgres:postgres@localhost:5432/things-test";
  const DBUri = "postgres://localhost:5432/things-test";
  const { exec, execSync } = require('child_process');
  // var env = app.get('env');
  var env = "test";

  let cmds = [
    `node node_modules/.bin/sequelize db:migrate --env test --config sql/config.json --url ${DBUri} --migrations-path sql/migrations`
  ];

  // if (env === "test") {
  //   cmds.unshift(`node node_modules/.bin/sequelize db:migrate:undo:all --env test --config migrations/config.json --url ${DBUri} --migrations-path migrations/tasks`);
  // }

  const cmd = cmds.join("\n");

  // cmd = "ls -la";
  // cmd = "sleep 5";

  // try {
    const out = execSync(cmd);
  //   console.info(out.toString());
  //   resolve();
  // } catch (e) {
  //   reject(e);
  // }
};

module.exports = migrate;
