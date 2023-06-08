module.exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("needles")
    .del()
    .then(() => knex("yarn").del())
    .then(() => knex("patterns").del());
};
