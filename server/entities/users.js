const { resolve } = require("path");

class Users{
    constructor(db){
        this.db = db
    }

    create(){
        return new Promise((resolve, reject) => {
            let user = this.db.users.insert([{nom: 'robert'}, {nom: 'martin'}], function (err, newDoc){return newDoc});
            if (false){
                reject();
            } else {
                resolve(newDoc);
            }

        });
    }

    get(){
        return new Promise((resolve, reject) => {
            const user = this.db.users.find({nom:'robert'}, function(err, docs){return docs;});
            if (false){
                reject();
            } else {
                resolve(docs);
            }

        });
    }
}


module.exports = Users;