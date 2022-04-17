const express = require("express")

function initRouter(db){
let router = express.Router();

router.get("", (req, res) => {
    db.posts.getPosts(req.body)
    .then((users) => res.send(users))
    .catch((error) => res.send(error));
});

router.post("", (req,res)  => {
    this.db.posts.create(req.body)
    .then((post) => res.status(201).send(post))
    .catch((error) => res.send(error))
});

router.get("/post/:postid", (req, res) => {
    if(req.session.userId === req.body.userid){
        this.db.posts.getFullPost(body)
        .then((post) => res.status(201).send(post))
        .catch((error) => res.send(error))
    }else{
        this.db.posts.getPost(req.body)
        .then((post) => res.status(201).send(post))
        .catch((error) => res.send(error))
    }
});

router.delete("/post/:postid",(req,res)=>{
    if(req.session.userId === req.body.userid){
    this.db.posts.delete(req.body)
    .then((post) => res.status(201).send(post))
    .catch((error) => res.send(error))    
    }else{res.status(403).send("You're not the owner of this post")}
})

router.get("/:postid", (req, res) =>{
    res.send("get 1 post");
});

router.patch("/:postid", (req, res)=>{
    //requete bd patch 
    res.send("patched post");
});
}
module.exports = router 

