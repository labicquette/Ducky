const { response } = require("express");
const { resolve } = require("path");

class Users{
    constructor(db){
        this.db = db
    }

    create(body){
        return new Promise((resolve, reject) => {
            if(body.username == undefined){
                reject("username empty");
            }else{
            if(body.firstname == undefined){
                reject("firstname empty");
            }else{
            if(body.lastname == undefined){
                reject("lastname empty");
            }else{
            if(body.sex == undefined){
                reject("sex empty");
            }else{
                this.db.users.insert([body], function (err, newUser){
                    if (err){
                        reject(err);
                    } else {
                        resolve(newUser);
                    }
                });    
            }
            }
            }   
            } 
        });
    }

    getUser(body){
        return new Promise((resolve, reject) => {
            if(body.username == undefined){
                reject("username undefined");
            }
            else{
                this.db.users.find({username:body.username}, function(err, user){
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
            this.db.users.find({username: body.usernames}, function(err, users){
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
            this.db.users.remove({username: body.username}, function(err, response){
                if(err){
                    reject(err);
                }else{
                    resolve(response)
                }
            });
        });
    }
    
    update(username, body){
        return new Promise((resolve, reject)=> {
            this.db.users.update({username: username}, body,{}, function(err, user){
                if(err){
                    reject(err);
                }else{
                    resolve(user);
                }
            });
        });
    }


}   


module.exports = Users;