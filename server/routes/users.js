const express = require("express")


function initRouter(db) {
let router = express.Router();


router.get("", (req, res) => {
    db.users.getUsers(req.body).
    then((users) => res.send(users))
    .catch((error) => res.send(error));
});

router.post("", (req,res)  => {
    db.users.create(req.body)
    .then((user) => res.status(201).send({user: user.username}))
    .catch((error) => res.send(error));
});

router.delete("/:username", (req, res) => {
    db.users.delete({username: req.params.username})
    .then((status) => res.status(201).send(status))
    .catch((error) => res.send(error));
});

router.get("/:username", (req, res) =>{
    db.users.getUser({username: req.params.username})
    .then((user) => res.status(201).send(user))
    .catch((error) => res.send(error));
});

router.patch("/:username", (req, res)=>{
    //requete bd patch 
    db.users.update(req.params.username, req.body)
    .then((user)=> res.sendStatus(201).send(user))
    .catch((error) => res.send(error));
});

return router
}
module.exports = initRouter