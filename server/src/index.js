express = require('express');
const app = express();
const port = 4444;

const posts = require("./entities/posts");
const users = require("./entities/users");
const login = require("./entities/login");

// On utilise JSON
app.use(express.json());
    // simple logger for this router's requests
    // all requests to this router will first hit this middleware
app.use((req, res, next) => {
    console.log('API: method %s, path %s', req.method, req.path);
    console.log('Body', req.body);
    next();
});


app.use("/posts", posts);
app.use("/users", users);
app.use("/login", login);







app.listen(port, err => {
  if(err){
    return console.log("ERROR index", err);
  }
  console.log(`Serveur actif sur le port ${port}`);
});

app.on('close', () => {
});


