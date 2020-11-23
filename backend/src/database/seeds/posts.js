
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {
          id: 97,
          author: 'Adam Smith',
          author_id: 97,
          date: '19/11/2020 10:52',
          text: 'laissez faire, laissez passer',
        },
        {
          id: 98,
          author: 'Thomas Malthus',
          author_id: 98,
          date: '19/11/2020 10:53',
          text: 'A população cresce mais rápido do que a produção de alimentos.',
        },
        {
          id: 99,
          author: 'David Ricardo',
          author_id: 99,
          date: '19/11/2020 10:55',
          text: 'O comércio internacional deveria ser dividido conforme a possibilidade de cada país.',
        }
      ]);
    });
};
