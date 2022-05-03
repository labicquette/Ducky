const express = require("express");
const session = require("express-session");

function initRouter(req, res, next, db){

let router = express.Router();



if(req.path === '/1/users'  && req.method === 'POST'){
    const{mail,password, username} = req.body
    if(mail && username && password){
        db.users.findOne({mail: mail}, function(err,user){

        if(err){
            res.status(500).send(err)
        }

        if(user !== null){
            res.status(403).send("mail already used")
            return;
        }else{
                newUser = req.body
                newUser.online     = false;
                newUser.private    = false;
                newUser.deleted    = false;
                newUser.banished   = false;
                newUser.ban        = null; 
                newUser.messages = []
                newUser.notifications = []
                newUser.stories = []
                newUser.stories_by = []
                newUser.stories_groups = []
                newUser.posts = []
                newUser.posts_by = []
                newUser.mentionnedPosts = []
                newUser.followers = []
                newUser.following = []
 
                db.users.findOne({username: username},function(err,user){
                    if(user!==null){
                        res.status(403).send("username already used")
                        return;
                    }else{db.users.insert(newUser,function(err, user){
                        if(err){
                            res.status(500).send("error inserting new user in database")
                            return;
                        }else{
                            res.cookie("user_id", user._id, {expire: 360000 + Date.now()})
                            res.send("user added to database")
                            return;
                        }
                    })}
                })

                
        }
        
    })
    }else{
        res.status(400).send("Missing Fields")
        return;
    }
}
else{
if(req.path == '/1/users/logout'){
    db.users.update({_id: req.cookies.user_id},{$set :{online: false}},function(err){
        if(err){
            res.send(err)
            return;
        }
    })
    req.session.destroy(err =>{
        if(err){
            res.status(500).send(err)
            return;
        }else{
            res.send("logged out")
            return;
        }
    })
}else{
if(req.path == '/1/users/login') {
    const{mail, username, phone, password} = req.body
    if((!mail || !username || !phone) && !password){
        res.status(403).send("Error: No credentials");
        return;
    }
    
    if(password){
        db.users.findOne({$or: [{username: username}, {mail:mail}, {phone:phone}]},function(err, user){
            if(err){
                res.status(500).send("error fetching user")
                return;
            }
            if(user !== [] && user !== null){
                
                if((user.password === password)){
                    db.users.update({_id: user._id}, {$set : {online : true}}, {},function(err){
                        if(err){
                            res.status(500).send("error setting user online")
                            return;
                        }
                    })
                    req.session.userId = user._id
                    res.cookie("user_id", user._id, {expire: 360000 + Date.now()})
                    req.session.regenerate(function(err){
                        console.log(user)
                        if(err){
                            res.status(500).send("error at setting cookies");
                            return;
                        }else{
                            res.end("connected")
                            return;
                        }    
                    })
                }else{
                    res.status(403).send("wrong credentials")
                }
            }else{
                res.status(403).send("User not found")
                return;
            }
        })
    }else{
        res.status(403).send("Missing fields")
        return;
    }
    return;

}else{
    if(req.cookies.user_id){
        next();
    }else{
        res.status(403).send("Not connected")
        return;
    }
}

return;
}}}
module.exports = initRouter 
