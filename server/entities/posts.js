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
            this.db.posts.update({_id: postid},{$push:{ likes:{user_id: body.user_id, time:body.time}}},{}, function(err){
                if(err){
                    reject(err)
                }else{
                    resolve("ok")
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


    getPostByReply(post_id){
        return new Promise((resolve, reject) => {
            this.db.posts.find({reply_to_id: post_id}, function(err, posts){
                if(err){
                    reject(err)
                }else{
                    resolve(posts)
                }
            })
        })
    }


    create(userid, body){
        return new Promise((resolve, reject) => {
            let post = body 
            post.user_id = userid
            post.banished = false;
            post.deleted = false;
            post.likes = []
            post.shares = []
            post.views = []
            post.reports = []
            post.time = Date.now()
            if(!post.reply_to_id){
                post.reply_to_id = null
            }
            
            
            this.db.posts.insert(post, function(err, posted){
                if(err){
                    reject(err)
                }else{
                    resolve(posted)  
                }
            })
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