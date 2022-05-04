 const express = require("express")


function initRouter(db) {
let router = express.Router();


router.get("", (req, res) => {
    if(req.query.listid){
        let ids = req.query.listid
        const listIds = ids.split(",")
        console.log(listIds)
        db.users.getUsersByIds(listIds)
        .then((users) => res.send(users))
        .catch((error) => res.send(error));
    }else{
        let ids = req.query.usernames
        const listIds = ids.split(",")
        console.log(listIds)
        db.users.getUsersByUsernames(listIds)
        .then((users) => res.send(users))
        .catch((error) => res.send(error));
    }
});

router.get("/all", (req, res) => {
    db.users.getAll()
    .then((user) => res.send(user))
    .catch((error) => res.send(error))
})

router.get("/me", (req, res) => {
    db.users.getUserById({userid : req.cookies.user_id})
    .then((user) => res.status(200).send(user))
    .catch((error) => res.send(error))
})

router.get("/by/username/:username", (req, res) =>{
    db.users.getUserByUsername({username: req.params.username})
    .then((user) => res.status(200).send(user))
    .catch((error) => res.send(error));
});

router.get("/:userid", (req, res) =>{
    if(req.cookies.user_id === req.params.userid){
        db.users.getFullUser({userid: req.params.userid})
        .then((user) => res.status(200).send(user))
        .catch((error) => res.send(error));
    }else{
        db.users.getUserById({userid: req.params.userid})
        .then((user) => res.status(200).send(user))
        .catch((error) => res.send(error));   
    }
});


router.patch("/:userid", (req, res)=>{
    //requete bd patch 
    if(req.cookies.user_id === req.params.userid){
        db.users.update(req.params.userid, req.body)
        .then((user)=> res.status(200).send(user))
        .catch((error) => res.send(error));
    }else{
        res.status(403).send("You cannot modify another user")
    }
});

router.delete("/:userid", (req, res) => {
    if(req.cookies.user_id === req.params.userid){
    db.users.delete(req.params.userid)
    .then((status) => res.sendStatus(200,status))
    .catch((error) => res.status(500).send(error));
    }else{res.status(403).send("You cannot delete another user")}
});


router.get("/:user_id/followers", (req, res) => {
    db.users.getFollowers(req.params.user_id)
    .then((followers) => res.status(200).send(followers))
    .catch((err) => res.status(500).send(err))
})

router.get("/:user_id/followings", (req, res) => {
    db.users.getFollowings(req.params.user_id)
    .then((followings) => res.status(200).send(followings))
    .catch((err) => res.status(500).send(err))
})

router.post("/:user_id/followings",(req, res)=> {
    db.users.addFollowing(req.body,req.params.user_id)
    .then((follow) => res.status(200).send(follow))
    .catch((err) => res.status(500).send(err))
})


router.delete("/:user_id/followers/:follower_id", (req,res)=> {
    
    db.users.delFollower(req.params.user_id, req.params.follower_id)
    .then((response) => res.status(200).send(response))
    .catch((err) => res.status(500).send(err))
})

router.delete("/:user_id/followings/:follower_id", (req,res)=> {
    
    db.users.delFollowing(req.params.user_id, req.params.follower_id)
    .then((response) => res.status(200).send(response))
    .catch((err) => res.status(500).send(err))
})

return router
}
module.exports = initRouter