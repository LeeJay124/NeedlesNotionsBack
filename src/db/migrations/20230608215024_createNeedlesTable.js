/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("needles", (table)=> {
        table.increments("needle_id").primary();
        table.string("name").notNullable();
        table.string("type").notNullable();
        table.integer("size");
        table.integer("quantity");
        table.timestamps(true, true);
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("needles");
};
