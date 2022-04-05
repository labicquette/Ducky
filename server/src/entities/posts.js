const express = require("express")
let router = express.Router();

router.get("", (req, res) => {
    res.send("hello there its posts")
});


module.exports = router 

