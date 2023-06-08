/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('yarn').del()
  await knex('yarn').insert([
    {brand: 'Caron', color: 'blue', yardage: 350, quantity: 1},
    {brand: 'Caron', color: 'white', yardage: 350, quantity: 1},
    {brand: 'Caron', color: 'grey', yardage: 350, quantity: 1},
    {brand: 'Caron', color: 'purple', yardage: 350, quantity: 1},
    {brand: 'Caron', color: 'pink', yardage: 350, quantity: 1},
  ]);
};
