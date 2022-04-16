const express = require("express");
const session = require("express-session");

function initRouter(req, res, next, db){

let router = express.Router();



if(req.path== '/register'){
    const{email,password, username} = req.body
    if(email && username && password){
        db.users.findOne({email: email}, function(err,user){
        if(err){
            res.status(500).send("email already used")
            return;
        }
        console.log('user',user)
        if(user !== null){
            res.status(403).send("error: User already exists")
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

                db.users.findOne({username: username},function(err,user){
                    if(user!==null){
                        res.status(403).send("username already used")
                        return;
                    }else{db.users.insert(newUser,function(err, user){
                        if(err){
                            res.status(500).send("error inserting new user in database")
                            return;
                        }else{
                            req.session.userId = user._id
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
if(req.path == '/logout'){
    res.session.destroy(err =>{
        if(err){
            res.status(500).send(err)
            return;
        }else{
            res.send("logged out")
            return;
        }
    })
}else{
if(req.path == '/login') {
    const{email, username, phone, password} = req.body
    if(!email && !username && phone){
        res.status(403).send("Error: No credentials");
        return;
    }
    
    if(password){
        db.users.findOne({$or: [{username: username}, {email:email}, {phone:phone}]},function(err, user){
            console.log('user', user)
            if(err){
                res.status(500).send("error fetching user")
                return;
            }
            if(user !== []){
                if((user.password === password)){
                    req.session.userId = user._id
                    req.session.regenerate(function(err){
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
    if(req.session.userId){
        next();
    }else{
        res.status(403).send("Not connected")
        return;
    }
}

return;
}}}
module.exports = initRouter 
