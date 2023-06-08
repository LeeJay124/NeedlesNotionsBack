/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('needles').del()
  await knex('needles').insert([
    {name: 'Purple', type: 'crochet', size: 5, quantity: 1},
    {name: 'Blue', type: 'crochet', size: 6, quantity: 1},
    {name: 'Green', type: 'crochet', size: 7, quantity: 1},
    {name: 'Black', type: 'crochet', size: 8, quantity: 1},
    {name: 'Red', type: 'crochet', size: 9, quantity: 1}
    
  ]);
};
