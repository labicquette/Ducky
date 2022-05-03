const express = require("express")


function initRouter(db) {
let router = express.Router();


router.get("", (req, res) => {
    let ids = req.query.listid
    const listIds = ids.split(",")
    db.users.getUsers(listIds)
    .then((users) => res.send(users))
    .catch((error) => res.send(error));
});

router.get("/me", (req, res) => {
    db.users.getUserById({_id : req.cookies.user_id})
    .then((user) => res.status(201).send(user))
    .catch((error) => res.send(error))
})

router.get("/by/username/:username", (req, res) =>{
    db.users.getUserByUsername({username: req.params.username})
    .then((user) => res.status(201).send(user))
    .catch((error) => res.send(error));
});

router.get("/:userid", (req, res) =>{
    if(req.cookies.user_id === req.params.userid){
        db.users.getFullUser({userid: req.params.userid})
        .then((user) => res.status(201).send(user))
        .catch((error) => res.send(error));
    }else{
        db.users.getUserById({userid: req.params.userid})
        .then((user) => res.status(201).send(user))
        .catch((error) => res.send(error));   
    }
});


router.patch("/:userid", (req, res)=>{
    //requete bd patch 
    if(req.cookies.user_id === req.params.userid){
        db.users.update(req.params.userid, req.body)
        .then((user)=> res.sendStatus(201).send("OK"))
        .catch((error) => res.send(error));
    }else{
        res.status(403).send("You cannot modify another user")
    }
});

router.delete("/:userid", (req, res) => {
    if(req.cookies.user_id === req.params.userid){
    db.users.delete({_id: req.params.userid})
    .then((status) => res.status(201).send(status))
    .catch((error) => res.send(error));
    }else{res.status(403).send("You cannot delete another user")}
});

return router
}
module.exports = initRouter