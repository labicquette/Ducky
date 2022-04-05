const express = require("express")
let router = express.Router();

router.get("", (req, res) => {
    res.send("return list of users");
});

router.post("", (req,res)  => {
    res.send("new user");
});

router.delete("/:userid", (req, res) => {
    res.send("user deleted");
});

router.get("/:userid", (req, res) =>{
    res.send("get 1 user");
});

router.patch("/:userid", (req, res)=>{
    //requete bd patch 
    res.send("patched user");
});

module.exports = router 