module.exports = function(req,res,next){
    if(req.Funciones){
        res.redirect("/descargaExitosa")
    }
    else{
        res.redirect("/index")
        next();
    }
}