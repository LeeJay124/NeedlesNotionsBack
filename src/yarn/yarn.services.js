const knex = require("../db/connection");

//Knex query to list yarn
function list() {
    return knex("yarn").select("*");
}


//Knex query to read yarn based on yarn id provided
function read(yarn_id){
    return knex
    .select("*")
    .from("yarn as n")
    .where({"n.yarn_id":yarn_id})
    .first();

}

module.exports = {
    list, read
}