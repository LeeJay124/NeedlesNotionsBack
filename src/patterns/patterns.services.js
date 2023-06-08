const knex = require("../db/connection");

//Knex query to list patterns
function list() {
    return knex("patterns").select("*");
}


//Knex query to read pattern based on pattern id provided
function read(pattern_id){
    return knex
    .select("*")
    .from("patterns as n")
    .where({"n.pattern_id":pattern_id})
    .first();

}

module.exports = {
    list, read
}