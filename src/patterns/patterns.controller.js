const service = require("./patterns.services");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

//List patterns based on is showing
async function list(req, res,next){
     const data = await service.list();
     res.json({data});
    
}
//Check whether the pattern exists
async function patternExists(req, res,next){
    const {patternId} = req.params;
    const pattern = await service.read(patternId);
    if(pattern){
        res.locals.pattern = pattern;
        return next();
    }
    return next({status: 404, message: `pattern does not exist`})

}
//Read pattern based on pattern id provided
async function read(req, res, next){
const {patternId} = req.params;
const data = await service.read(patternId);
res.json({data});
}

module.exports = {
    list: asyncErrorBoundary(list),
    read: [asyncErrorBoundary(patternExists), read],
    patternExists:[asyncErrorBoundary(patternExists)],
}