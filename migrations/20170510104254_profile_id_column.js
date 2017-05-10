exports.up = function(knex, Promise) {
  return knex.schema.table('users', function(table) {
    table.integer('profile_id')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.table('users')
  table.dropColumn('profile_id')
}
