const { time } = require("console");
const { resolve } = require("path");

class Posts{
    constructor(db){
        this.db = db
    }

    getPosts(body){
        return new Promise((resolve, reject)=> {
            this.db.posts.find({_id: {$in : body.posts}}, {reports: 0, banished_reason:0}, function(err, posts){
                if(err){
                    reject(err);
                }else{
                    resolve(posts)
                }
            })
        })
    }

    getPost(body){
        return new Promise((resolve, reject)=> {
            this.db.posts.findOne({_id:body.postid}, {
                reports:0,
                banished_reason:0
            },function(err,post){
                if(err){
                    reject(err)
                }else{
                    resolve(post)
                }
            })
        })
    }

    getFullPost(body){
        return new Promise((resolve, reject)=>{
            this.db.posts.findOne(body.postid, function(err,post){
                if(err){
                    reject(err)
                }else{
                    resolve(post)
                }
            })
        })
    }

    getPostsByUser(body){
        return new Promise((resolve, reject)=> {
            this.db.posts.find({user_id:body}, function(err, post){
                if(err){
                    reject(err)
                }else{
                    resolve(post)
                }
            })
        })
    }

    getPostsBy(body){
        return new Promise((resolve, reject)=> {
        if(body.hashtags){
            this.db.posts.find({hashtags: {$in : body.hashtags}}, function(err, posts){
                if(err){
                    reject(err)
                }else{
                    resolve(posts)
                }
            })
        }else{
            if(body.mentionned_users_ids){
                this.db.posts.find({mentionned_users_ids: {$in : body.mentionned_users_ids}}, function(err,posts){
                    if(err){
                        reject(err)
                    }else{
                        resolve(posts)
                    }
                })
            }
        }
        reject("No field")
        })
    }

    getPostLikes(body){
        return new Promise((resolve, reject) => {
            this.db.posts.find({_id:req.post_id},{likes:1}, function(err, likes){
                if(err){
                    reject(err)
                }else{
                    resolve(likes)
                }
            })
        })
    }

    addPostLike(body){
        return new Promise((resolve, reject) => {
            this.db.posts.update({_id: req.post_id},{$push:{ likes:{user_id: req.user_id, time:req.time}}}, function(err, like){
                if(err){
                    reject(err)
                }else{
                    resolve(like)
                }
            })
        })
    }

    delPostLike(body){
        return new Promise((resolve, reject) => {
            this.db.posts.update({_id:req.post_id}, {$pull:{ likes: {user_id: req.user_id}}}, {}, function(err, like){
                if(err){
                    reject(err)
                }else{
                    resolve(like)
                }
            })
        })
    }


    create(body){
        return new Promise((resolve, reject) => {
            var post = body 
            post.user_id = req.cookies.user_id
            post.banished = false;
            post.deleted = false;
            post.likes = [];
            post.shares = [];
            post.views = []
            post.reports = []
            post.time = Date.now()

            this.db.posts.insert(post, function(err, post){
                if(err){
                    reject(err);
                }else{
                    resolve(post)
                }
            })

            //additional requests : notifications, insertion in user database
        })
    }

    update(postid, body){
        return new Promise((resolve, reject)=> {
            this.db.posts.update({_id: postid}, {$set : body}, {}, function(err, post){
                if(err){
                    reject(err)
                }else{
                    resolve(post)
                }
            });
        });
    }

    delete(body){
        return new Promise((resolve, reject)=> {
            this.db.posts.update({_id: body.postid}, deleted=true,{}, function(err,post){
                if(err){
                    reject(err)
                }else{
                    resolve(post)
                }
            })

        })
    }
}

module.exports = Posts;