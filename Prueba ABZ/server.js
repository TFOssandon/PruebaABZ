const express = require('express')
const app = express()

const path = require('path');
const router =express.Router();
const port = 8088

//const userRouters = require('./app/routes/user')
//const itemsRouters = require('./app/routes/items')

//app.use(userRouters)
//app.use(itemsRouters)



router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.use(express.static('public'))
app.use('/',router)

app.listen(port,()=> {
    console.log('La Aplicacion esta en linea!')
})