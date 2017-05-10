exports.seed = function (knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({id: 99901, name: 'Ambitious Aardvark', email: 'aardvark@example.org', profile_id: 1}),
        knex('users').insert({id: 99902, name: 'Bamboozled Baboon', email: 'baboon@example.org', profile_id: 2}),
        knex('users').insert({id: 99903, name: 'Curious Capybara', email: 'capybara@example.org', profile_id: 3}),
        knex('users').insert({id: 99904, name: 'Dilapidated Duck', email: 'duck@example.org', profile_id: 4}),
      ]);
    });
};
