/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('patterns').del()
  await knex('patterns').insert([
    {name: 'granny square blanket', type: 'blanket', pattern_url: 'https://daisycottagedesigns.net/free-crochet-patterns-granny-square/'},
    {name: 'kodiak cowl', type: 'scarf', pattern_url: 'https://www.stitchandhustle.com/free-patterns/kodiak-cowl-free-crochet-pattern'},
    {name: 'slip stitch granny join', type: 'tutorial', pattern_url: 'https://www.craftpassion.com/flat-slip-stitch-granny-join/'},
  ]);
};
