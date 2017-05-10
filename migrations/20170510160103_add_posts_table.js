exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', function(table) {
    table.increments('id').primary()
    table.string('title')
    table.string('content')
    table.integer('user_id')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts')

}
