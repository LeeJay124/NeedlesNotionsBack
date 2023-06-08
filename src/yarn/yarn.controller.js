const service = require("./yarn.services");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

//List yarns based on is showing
async function list(req, res,next){
     const data = await service.list();
     res.json({data});
    
}
//Check whether the yarn exists
async function yarnExists(req, res,next){
    const {yarnId} = req.params;
    const yarn = await service.read(yarnId);
    if(yarn){
        res.locals.yarn = yarn;
        return next();
    }
    return next({status: 404, message: `yarn does not exist`})

}
//Read yarn based on yarn id provided
async function read(req, res, next){
const {yarnId} = req.params;
const data = await service.read(yarnId);
res.json({data});
}

module.exports = {
    list: asyncErrorBoundary(list),
    read: [asyncErrorBoundary(yarnExists), read],
    yarnExists:[asyncErrorBoundary(yarnExists)],
}