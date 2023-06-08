const knex = require("../db/connection");

//Knex query to list needles
function list() {
    return knex("needles").select("*");
}


//Knex query to read needle based on needle id provided
function read(needle_id){
    return knex
    .select("*")
    .from("needles as n")
    .where({"n.needle_id":needle_id})
    .first();

}

module.exports = {
    list, read
}