const express = require("express")

function initRouter(db){
let router = express.Router();

router.get("", (req, res) => {
    db.posts.getPosts(req.body)
    .then((users) => res.send(users))
    .catch((error) => res.send(error));
});

router.post("", (req,res)  => {
    db.posts.create(req.body)
    .then((post) => res.status(201).send(post))
    .catch((error) => res.send(error))
});

router.get("/post/:postid", (req, res) => {
    if(req.session.userId === req.body.userid){
        db.posts.getFullPost(body)
        .then((post) => res.status(201).send(post))
        .catch((error) => res.send(error))
    }else{
        db.posts.getPost(req.body)
        .then((post) => res.status(201).send(post))
        .catch((error) => res.send(error))
    }
});

router.delete("/post/:postid",(req,res)=>{
    if(req.session.userId === req.body.userid){
    db.posts.delete(req.body)
    .then((post) => res.status(201).send(post))
    .catch((error) => res.send(error))    
    }else{res.status(403).send("You're not the owner of this post")}
})

router.patch("/post/:postid", (req, res)=>{
    //requete bd patch 
    if(req.session.userId === req.body.userid){
        db.posts.update(req.body)
        .then((post) => res.status(201).send(post))
        .catch((error) => res.send(error))
    }else{res.status(403).send("You're not the owner of this post")}
    res.send("patched post");
});
}
module.exports = router 

