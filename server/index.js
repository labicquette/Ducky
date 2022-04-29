express = require('express');
var DataStore = require('nedb');
var cors = require('cors');
const app = express();
const port = 4444;



const posts = require("./routes/posts");
const users = require("./routes/users");
const login = require("./routes/login");

const Posts = require("./entities/posts");
const Users = require("./entities/users");
//const Login = require("./entities/login");

const session = require("express-session");
var cookieParser = require("cookie-parser");

var NedbStore = require('nedb-session-store')(session);

const db = {} 
db.users = new DataStore({filename: '../database/dataUsers.txt', autoload: true});
db.users.ensureIndex({fieldName: 'username',unique:true, sparse:true});
//db.login = new NedbStore({filename: '../database/dataSessions.txt'});

db.posts = new DataStore({filename: '../database/dataPosts.txt', autoload: true});

dbInterface = {}
dbInterface.users = new Users(db)
dbInterface.posts = new Posts(db)


app.use(cors())
app.use(express.json());

app.use(cookieParser());

// On utilise JSON

    // simple logger for this router's requests
    // all requests to this router will first hit this middleware

//

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
  console.log(req)
  login(req, res, next, db);
});


app.use("/1/users", users(dbInterface));
app.use("/1/posts", posts(dbInterface));







app.listen(port, err => {
  if(err){
    return console.log("ERROR index", err);
  }
  console.log(`Serveur actif sur le port ${port}`);
});

app.on('close', () => {
});


