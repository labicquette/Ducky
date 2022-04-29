const express = require("express")

function initRouter(db){
let router = express.Router();

router.get("", (req, res) => {
    let ids = req.query.postsids
    const postsids = ids.split(",")
    db.posts.getPosts(postsids)
    .then((users) => res.send(users))
    .catch((error) => res.send(error));
});

router.post("", (req,res)  => {
    db.posts.create(req.body)
    .then((post) => res.status(201).send(post))
    .catch((error) => res.send(error))
});



router.get("/by/user/:user_id", (req,res) => {
    db.posts.getPostsByUser(req.params.user_id)
    .then((posts) => res.send(posts))
    .catch((error) => res.send(error))
})


router.get("/by", (req,res)  => {
    db.posts.getPostsBy(req.body)
    .then((posts) => res.send(posts))
    .catch((error) => res.send(error))
})

router.get("/post/:post_id/likes", (req,res)=>{
    db.posts.getPostLikes(req.params.post_id)
    .then((users) => res.send(users))
    .catch((error)=> res.send(error))
})

router.post("/posts/:post_id/likes", (req, res)=>{
    db.posts.addPostLike(req.body)
    .then((like) => res.send(like))
    .catch((error) => res.send(error))
})

router.delete("/posts/:post_id/likes", (req,res) => {
    db.posts.delPostLike(req.body)
    .then((like) => res.send("OK"))
    .catch((error) => res.send(error))
})


router.delete("/:postid",(req,res)=>{
    if(req.session.userId === req.body.userid){
        db.posts.delete(req.body)
        .then((post) => res.status(201).send(post))
        .catch((error) => res.send(error))    
    }else{res.status(403).send("You're not the owner of this post")}
})

router.patch("/:postid", (req, res)=>{
    //requete bd patch 
    db.posts.update(req.params.postid, req.body)
    .then((post) => res.status(201).send(post))
    .catch((error) => res.send(error))
});

router.get("/:postid", (req, res) => {
        db.posts.getPostById(req.params.postid)
        .then((post) => res.status(201).send(post))
        .catch((error) => res.send(error))
});
return router
}
module.exports = initRouter 
