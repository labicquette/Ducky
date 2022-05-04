
class Users{
    constructor(db){
        this.db = db
    }

    getAll(){
        return new Promise((resolve, reject) => 
            this.db.users.find({}, function(err, user){
                if (err){
                    reject(err);
                } else {
                    resolve(user);
                }
            })
        );
    }

    getFullUser(body){
        return new Promise((resolve, reject) => {
            if(body.userid == undefined){
                reject("userid undefined");
            }
            else{
                this.db.users.findOne({_id:body.userid}, function(err, user){
                    if (err){
                        reject(err);
                    } else {
                        resolve(user);
                    }
                });
            }

        });
    }

    getUserById(body){
        return new Promise((resolve, reject) => {
            if(body.userid == undefined){
                reject("username userid");
            }
            else{
                this.db.users.findOne({_id:body.userid}, {
                    _id:1,
                username:1,
                firstname:1, 
                lastname:1, 
                sex:1, 
                profil_picture_src:1,
                phone:1, 
                mail:1, 
                city:1,
                country:1,
                birthday:1, 
                biography:1,
                creation_time:1
                } ,function(err, user){
                    if (err){
                        reject(err);
                    } else {
                        resolve(user);
                    }
                });
            }

        });
    }

    getUserByUsername(body){
        return new Promise((resolve, reject) => {
            if(body.username == undefined){
                reject("username undefined");
            }
            else{
                this.db.users.findOne({username:body.username}, {
                    _id:1,
                username:1,
                firstname:1, 
                lastname:1, 
                sex:1, 
                profil_picture_src:1,
                phone:1, 
                mail:1, 
                city:1,
                country:1,
                birthday:1, 
                biography:1,
                creation_time:1
                } , function(err, user){
                    if (err){
                        reject(err);
                    } else {
                        resolve(user);
                    }
                });
            }

        });
    }

    getUsersByUsernames(usernames){
        return new Promise((resolve, reject)=>{
            //usernames = ["username1","username2","username3"]
            this.db.users.find({username : {$in : usernames}}, {
                _id:1,
            username:1,
            firstname:1, 
            lastname:1, 
            sex:1, 
            profil_picture_src:1,
            phone:1, 
            mail:1, 
            city:1,
            country:1,
            birthday:1, 
            biography:1,
            creation_time:1
            }, function(err, users){
                if(err){
                    reject(err);
                }else{
                    resolve(users);
                }
            });
        });
    }


    getUsersByIds(listids){
        return new Promise((resolve, reject)=>{
            //usernames = ["username1","username2","username3"]
            this.db.users.find({_id : {$in : listids}}, {
                _id:1,
            username:1,
            firstname:1, 
            lastname:1, 
            sex:1, 
            profil_picture_src:1,
            phone:1, 
            mail:1, 
            city:1,
            country:1,
            birthday:1, 
            biography:1,
            creation_time:1
            }, function(err, users){
                if(err){
                    reject(err);
                }else{
                    resolve(users);
                }
            });
        });
    }

    delete(userid){
        return new Promise((resolve, reject)=>{
            this.db.users.remove({_id: userid}, {}, function(err, response){
                if(err){
                    reject(err);
                }else{
                    resolve(response)
                }
            });
        });
    }
    
    update(userid, body){
        return new Promise((resolve, reject)=> {
            this.db.users.update({_id: userid}, {$set :body},{}, function(err, numAffected, affectedDocuments, upsert){
                if(err){
                    reject(err);
                }else{
                    resolve(affectedDocuments);
                }
            });
        });
    }

    getFollowers(user_id){
        return new Promise((resolve, reject)=> {
            this.db.users.findOne({_id: user_id},{followers:1, _id:0}, function(err, followers){
                if(err){
                    reject(err)
                }else{
                    resolve(followers)
                }
            })
        })
    }

    getFollowings(user_id){
        return new Promise((resolve, reject)=> {
            this.db.users.findOne({_id: user_id},{followings:1, _id:0}, function(err, followings){
                if(err){
                    reject(err)
                }else{
                    resolve(followings)
                }
            })
        })
    }

    addFollowing(body, user_id){
        return new Promise((resolve, reject) => {
            this.db.users.update({_id: user_id}, {$push : {followings: {following_id: body.following_id, time: body.time }}},{},function(err){
                if(err){
                    reject(err)
                }else{
                    this.db.users.update({_id: body.following_id}, {$push: {followers:{follower_id: user_id, time: body.time}}},{}, function(err2){
                        if(err2){
                            reject(err2)
                        }else{
                            resolve("OK")
                        }
                    })
                }
            })
        })
    }

    delFollower(user_id, follower_id){
        return new Promise((resolve, reject) => {
            this.db.users.update({_id: user_id}, {$pull :{follower : {follower_id : follower_id}}},{}, function(err){
                if(err){
                    reject(err)
                }else{
                    resolve("OK")
                }
            })
        })
    }


}   


module.exports = Users;