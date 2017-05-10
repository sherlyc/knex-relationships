exports.seed = function (knex, Promise) {
  return knex('profiles').del()
    .then(function () {
      return Promise.all([
        knex('profiles').insert({url:'http://www.goggle.com', picture: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS--R0f6kNSy_yY0Ny05y839a0kCLXK-GPgeSwiL3oGb_m4tuXa', user_id: 99901}),
        knex('profiles').insert({url: 'http://www.facebook.com', picture: 'http://1.bp.blogspot.com/-Atd4dhSSxUQ/Tq9pXLIhNiI/AAAAAAAAAIc/0kYBROy_Xr8/s1600/Funny+baboon+images1.jpg', user_id: 99902}),
        knex('profiles').insert({url: 'http://www.glasses.com', picture: 'http://railsware.com/blog/wp-content/uploads/2012/04/capybara.jpg', user_id: 99903}),
        knex('profiles').insert({url: 'http://www.fido.com', picture: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTuthE-l5nSXGVVg5kgv59Z0PdqzkEuZiCKzxjYlSTl2oRX6khsIA', user_id: 99904}),

      ]);
    });
};
