const router = require("express").Router()

router.get("/", (req, res) => {
    res.send("Página Inicial!")
})
module.exports = router;