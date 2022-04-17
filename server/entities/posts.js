class Posts{
    constructor(db){
        this.db = db
    }

    getPosts(body){
        return new Promise((resolve, reject)=> {
            this.db.users.find(body.posts, {reports: 0, banished_reason:0}, function(err, posts){
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
            this.db.users.findOne({_id:body.postid}, {
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
            this.db.users.findOne(body.postid, function(err,post){
                if(err){
                    reject(err)
                }else{
                    resolve(post)
                }
            })
        })
    }

    create(body){
        return new Promise((resolve, reject) => {
            const post = body 
            post.banished = false;
            post.deleted = false;
            post.likes = [];
            post.shares = [];
            post.views = []
            post.reports = []

            this.db.users.insert(post, function(err, post){
                if(err){
                    reject(err);
                }else{
                    resolve(post)
                }
            })
        })
    }

    update(body){
        return new Promise((resolve, reject)=> {
            this.db.users.update({_id:})
        })
    }

    delete(body){
        return new Promise((resolve, reject)=> {
            this.db.users.update({_id: body.postid}, deleted=true,{}, function(err,post){
                if(err){
                    reject(err)
                }else{
                    resolve(post)
                }
            })

        })
    }
}

module.exports = Users;