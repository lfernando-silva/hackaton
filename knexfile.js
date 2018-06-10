module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://hdftttcqubnuqb:a5f3d8b727ba89c968cd41e8f55c0aef64d635640774b8fceb4b370f32657883@ec2-23-23-247-245.compute-1.amazonaws.com:5432/d8s51pjh597elg?ssl=true',
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
      client: 'pg',
      connection: 'postgres://hdftttcqubnuqb:a5f3d8b727ba89c968cd41e8f55c0aef64d635640774b8fceb4b370f32657883@ec2-23-23-247-245.compute-1.amazonaws.com:5432/d8s51pjh597elg?ssl=true',
      migrations: {
          tableName: 'knex_migrations'
      }
  }
}
