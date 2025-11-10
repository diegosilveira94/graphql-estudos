// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  client: "pg",
  connection: {
    database: "postgres",
    user: "postgres",
    password: "123456",
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
    directory: "./ComPostgrePartirAula17/src/db/migrations",
  },
};
