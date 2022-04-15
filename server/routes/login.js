const express = require("express");
const session = require("express-session");

function initRouter(req, res, next, db){

let router = express.Router();



if(req.path== '/signin'){
    db
}

if(req.path == '/login') {
    
    req.session.regenerate(function(err){
        if(err){
            res.status(500).send("error at setting cookies");
            return;
        }
        else{
            req.session.Store.set(req.session.id, req.session, function(err){
                if(err){
                    res.status(500).send(err);
                    return;
                }else{
                    //res.session = req.session;
                    res.end("connected");
                    return;
                }
            })
        }
    })
    return;
}else{
    if(req.session.id !== undefined){
        req.session.Store.get(req.session.id, function(err, session){
            if(err){
                res.status(500).send("Error fetching session")
                return;
            }else{
            if(!session){
                res.status(403).send("Session Timed Out");
                return
            }
            else{
                res.send(session)
                return;
                next();
            }}
        })
    }else{
        res.status(403).send("Not connected")
        return;
    }
}

return;
}
module.exports = initRouter 
