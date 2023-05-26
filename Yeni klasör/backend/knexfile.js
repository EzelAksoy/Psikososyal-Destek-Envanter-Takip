// Update with your config settings.
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const sharedConfig = {
  client: "sqlite3",
  useNullAsDefault: true,
  migrations: { directory: "./Data/migrations" },
  seeds: { directory: "./Data/seeds" },
  pool: {
    afterCreate: (conn, done) => conn.run("PRAGMA foreign_keys = ON", done),
  },
};
module.exports = {
  development: {
    ...sharedConfig,
    connection: { filename: "./Data/project.db3" },
  },
  testing: {
    ...sharedConfig,
    connection: { filename: "./Data/test.db3" },
  },
};
