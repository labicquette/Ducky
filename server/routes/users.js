const express = require("express")


function initRouter(db) {
let router = express.Router();


router.get("", (req, res) => {
    db.users.get().then((user) => res.send({user: user}));
});

router.post("", (req,res)  => {
    db.users.create().then((user) => res.status(201).send({user: user}));
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

return router
}
module.exports = initRouter