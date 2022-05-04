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

    getAll(){
        return new Promise((resolve, reject)=> {
            this.db.posts.find({}, function(err, posts){
                if(err){
                    reject(err);
                }else{
                    resolve(posts);
                }
            })
        })
    }

    getPostById(postid){
        return new Promise((resolve, reject)=> {
            this.db.posts.findOne({_id:postid}, {
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

    getPostsByUser(user_id){
        return new Promise((resolve, reject)=> {
            this.db.posts.find({user_id:user_id}, function(err, post){
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
            let listHashtags = body.hashtags
            const hashtags = listHashtags.split(",")
            this.db.posts.find({hashtags: {$in : hashtags}}, function(err, posts){
                if(err){
                    reject(err)
                }else{
                    resolve(posts)
                }
            })
        }else{
            if(body.mentionned_users_ids){
                let mentionned_users = body.mentionned_users_ids
                const users_ids = mentionned_users.split(",")
                this.db.posts.find({mentionned_users_ids: {$in : users_ids}}, function(err,posts){
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

    getPostLikes(postid){
        return new Promise((resolve, reject) => {
            this.db.posts.find({_id: postid},{likes:1}, function(err, likes){
                if(err){
                    reject(err)
                }else{
                    resolve(likes)
                }
            })
        })
    }

    addPostLike(body, postid){
        return new Promise((resolve, reject) => {
            this.db.posts.update({_id: postid},{$push:{ likes:{user_id: body.user_id, time:body.time}}}, function(err, like){
                if(err){
                    reject(err)
                }else{
                    resolve(like)
                }
            })
        })
    }

    delPostLike(body, postid){
        return new Promise((resolve, reject) => {
            this.db.posts.update({_id:postid}, {$pull:{ likes: {user_id: body.user_id}}}, {}, function(err, like){
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
                    this.db.users.update({_id: body.mentionned_users_ids},{$push : {mentionnedPosts : post._id}},{multi : true},function(){})
                    resolve(post)
                }
            })

            //additional requests : notifications, insertion in user database
        })
    }

    update(postid, body){
        return new Promise((resolve, reject)=> {
            this.db.posts.update({_id: postid}, {$set : body}, {}, function(err){
                if(err){
                    reject(err)
                }else{
                    resolve("OK")
                }
            });
        });
    }

    delete(postid){
        return new Promise((resolve, reject)=> {
            this.db.posts.remove({_id: postid},{}, function(err,post){
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