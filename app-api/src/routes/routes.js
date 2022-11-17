const {Router} = require("express")
const router = Router()


router.get("/router",(req, res)=>{
    res.send("Rota do router")
})

module.exports = router