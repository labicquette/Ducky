 const express = require("express")

function initRouter(db){
let router = express.Router();

router.get("", (req, res) => {
    let ids = req.query.listid
    const postsids = ids.split(",")
    db.posts.getPosts(postsids)
    .then((users) => res.send(users))
    .catch((error) => res.send(error));
});

router.post("", (req,res)  => {
    db.posts.create(req.cookies.user_id, req.body)
    .then((post) => db.users.updateMentionnedPosts(post,req.body.mentionned_users_ids)
        .then((status) => res.status(200).send(status))
        .catch((error2) => res.status(500).send(error2)))
    .catch((error) => res.status(500).send(error))
});

router.get("/all", (req, res) => {
    db.posts.getAll()
    .then((posts) => res.send(posts))
    .catch((error) => res.status(500).send(error))
})

router.get("/by/user/:user_id", (req,res) => {
    db.posts.getPostsByUser(req.params.user_id)
    .then((posts) => res.send(posts))
    .catch((error) => res.send(error))
})


router.get("/by", (req,res)  => {
    db.posts.getPostsBy(req.query)
    .then((posts) => res.send(posts))
    .catch((error) => res.send(error))
})



router.post("/:post_id/likes", (req, res)=>{
    db.posts.addPostLike(req.body, req.params.post_id)
    .then((like) => res.send(like))
    .catch((error) => res.send(error))
})

router.delete("/:post_id/likes", (req,res) => {
    db.posts.delPostLike(req.body, req.params.post_id)
    .then((like) => res.send("OK"))
    .catch((error) => res.send(error))
})


router.delete("/:postid",(req,res)=>{
    db.posts.delete(req.params.postid)
    .then((post) => res.sendStatus(200, post))
    .catch((error) => res.status(500).send(error))
})

router.patch("/:postid", (req, res)=>{
    //requete bd patch 
    db.posts.update(req.params.postid, req.body)
    .then((post) => res.status(200).send(post))
    .catch((error) => res.send(error))
});

router.get("/:post_id/likes", (req,res)=>{
    db.posts.getPostLikes(req.params.post_id)
    .then((users) => res.send(users))
    .catch((error)=> res.send(error))
})

router.get("/:postid", (req, res) => {
    db.posts.getPostById(req.params.postid)
        .then((post) => res.status(200).send(post))
        .catch((error) => res.send(error))
});



return router
}
module.exports = initRouter 
