/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("yarn", (table)=> {
    table.increments("yarn_id").primary();
    table.string("brand").notNullable();
    table.string("color").notNullable();
    table.integer("yardage");
    table.integer("quantity");
    table.timestamps(true, true);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("yarn");

};
