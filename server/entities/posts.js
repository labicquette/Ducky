class Posts{
    constructor(db){
        this.db = db
    }

    getPosts(body){
        return new Promise((resolve, reject)=> {
            this.db.posts.find(body.posts, {reports: 0, banished_reason:0}, function(err, posts){
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

    create(body){
        return new Promise((resolve, reject) => {
            const post = body 
            post.banished = false;
            post.deleted = false;
            post.likes = [];
            post.shares = [];
            post.views = []
            post.reports = []

            this.db.posts.insert(post, function(err, post){
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
            this.db.posts.update({_id: body.postid}, body, {}, function(err, post){
                if(err){
                    reject(err)
                }else{
                    resolve(post)
                }
            })
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