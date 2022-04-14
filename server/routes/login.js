const express = require("express");
const session = require("express-session");

function initRouter(db){

let router = express.Router();



router.get("login", (req, res) => {
    
    req.session.regenerate(function(err){
        if(err){
            res.status(500).send("error at setting cookies");
        }
        else{
            db.insert({session_id: req.sessionID}, function(err, newSessionId){
                if(err){
                    res.status(500).send(err);
                }else{
                    res.session = req.session;
                    res.send("connected");
                }
            })
        }
    })
    res.send("logged in");
});

router.all("",(req,res,next)=>{
    if(req.session.session_id){
        if(db.find({session_id : req.session.session_id},function(err, docs){
            if(docs){return docs}
            else{return false}
        })){
            next();
        }else{
            res.status(403).send("Session Timed Out")
        }
    }
})

return router
}
module.exports = initRouter 
