exports.seed = function (knex, Promise) {
  return knex('posts').del()
    .then(function () {
      return Promise.all([
        knex('posts').insert({}),
        knex('posts').insert({}),
        knex('posts').insert({}),
        knex('posts').insert({}),
      ]);
    });
};
