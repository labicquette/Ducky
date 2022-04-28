
class Users{
    constructor(db){
        this.db = db
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

    getUsers(body){
        return new Promise((resolve, reject)=>{
            //usernames = ["username1","username2","username3"]
            this.db.users.find({username : {$in : body.usernames}}, {
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

    delete(body){
        return new Promise((resolve, reject)=>{
            this.db.users.remove({_id: body.userid}, function(err, response){
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
            this.db.users.update({_id: userid}, {$set :body},{}, function(err){
                if(err){
                    reject(err);
                }else{
                    resolve("OK");
                }
            });
        });
    }


}   


module.exports = Users;