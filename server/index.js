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

const db = {} 
db.users = new DataStore({ filename: '../../database/dataUsers.txt', autoload: true });
db.posts = new DataStore({ filename: '../../database/dataPosts.txt', autoload: true });

dbInterface = {}
dbInterface.users = new Users(db)
//dbInterface.posts = new Posts(db)

// On utilise JSON
app.use(express.json());
    // simple logger for this router's requests
    // all requests to this router will first hit this middleware
app.use((req, res, next) => {
    console.log('API: method %s, path %s', req.method, req.path);
    console.log('Body', req.body);
    next();
});


//app.use("/posts", posts(dbInterface));
app.use("/users", users(dbInterface));
//app.use("/login", login(dbInterface));







app.listen(port, err => {
  if(err){
    return console.log("ERROR index", err);
  }
  console.log(`Serveur actif sur le port ${port}`);
});

app.on('close', () => {
});


