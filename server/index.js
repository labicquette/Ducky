express = require('express');
var DataStore = require('nedb');
const app = express();
const port = 4444;

const posts = require("./routes/posts");
const users = require("./routes/users");
const login = require("./routes/login");

//const Posts = require("./entities/posts");
const Users = require("./entities/users");
//const Login = require("./entities/login");

const session = require("express-session");

var NedbStore = require('nedb-session-store')(session);

const db = {} 
db.users = new DataStore({filename: '../database/dataUsers.txt', autoload: true});
db.users.ensureIndex({fieldName: 'username',unique:true, sparse:true});
//db.login = new NedbStore({filename: '../database/dataSessions.txt'});

db.posts = new DataStore({filename: '../database/dataPosts.txt', autoload: true});

//db.login = new DataStore({filename: '../database/sessions.txt', autoload:true});
//db.login.ensureIndex({fieldName: 'session_id', expireAfterSeconds: 2628000, unique:true, sparse:true})

dbInterface = {}
dbInterface.users = new Users(db)
//dbInterface.posts = new Posts(db)

// On utilise JSON
app.use(express.json());
    // simple logger for this router's requests
    // all requests to this router will first hit this middleware

app.use(session({
    secret: "chaine <<aleatoire>>",
    cookie: {maxAge : 30000},
    saveUninitialized: false,
    store: new NedbStore({filename: '../database/dataSessions.txt'})
}));

app.use((req, res, next) => {
  console.log('API: method %s, path %s', req.method, req.path);
  console.log('Body', req.body);
  next();
});

app.all("*",(req,res,next) =>{ 
  login(req, res, next, db.login);
});

//app.use("/posts", posts(dbInterface));
app.use("/users", users(dbInterface));








app.listen(port, err => {
  if(err){
    return console.log("ERROR index", err);
  }
  console.log(`Serveur actif sur le port ${port}`);
});

app.on('close', () => {
});


