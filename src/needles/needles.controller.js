const service = require("./needles.services");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

//List needles based on is showing
async function list(req, res,next){
     const data = await service.list();
     res.json({data});
    
}
//Check whether the needle exists
async function needleExists(req, res,next){
    const {needleId} = req.params;
    const needle = await service.read(needleId);
    if(needle){
        res.locals.needle = needle;
        return next();
    }
    return next({status: 404, message: `Needle does not exist`})

}
//Read needle based on needle id provided
async function read(req, res, next){
const {needleId} = req.params;
const data = await service.read(needleId);
res.json({data});
}

module.exports = {
    list: asyncErrorBoundary(list),
    read: [asyncErrorBoundary(needleExists), read],
    needleExists:[asyncErrorBoundary(needleExists)],
}