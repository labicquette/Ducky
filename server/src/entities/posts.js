const express = require("express")
let router = express.Router();

router.get("", (req, res) => {
    res.send("return list of posts");
});

router.post("", (req,res)  => {
    res.send("new post");
});

router.delete("/:postid", (req, res) => {
    res.send("post deleted");
});

router.get("/:postid", (req, res) =>{
    res.send("get 1 post");
});

router.patch("/:postid", (req, res)=>{
    //requete bd patch 
    res.send("patched post");
});

module.exports = router 

