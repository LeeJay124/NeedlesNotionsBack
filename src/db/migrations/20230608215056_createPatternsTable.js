/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("patterns", (table)=> {
        table.increments("pattern_id").primary();
        table.string("name").notNullable();
        table.string("type");
        table.string("pattern_url");
        table.timestamps(true, true);
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("patterns");

};
