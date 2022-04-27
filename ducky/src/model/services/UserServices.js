import axios from "axios";
import { User } from '../objects/User';

export class UserServices {

    static errorCallback(error) {
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log('Error', error.message);
          }
          console.log(error.config);
    }

    static login(username, password) {
        let usersJson = require('../../ressources/test_database/users.json');
        for (let userObject of usersJson) {
            if (userObject.username === username) {
                if (userObject.password === password)
                    return {
                        ok: true,
                        user: User.fromJSON(userObject)
                    };
            }
        }
        return {
            ok: false,
            message: "Nom d'utilisateur ou mot de passe incorrects !"
        };
    }

    static login2(username, password) {
        axios.post('/1/users/login', {
            username: username,
            mail: username,
            phone: username,
            password: password
        })
        .then((response) => {
            if (response.status === 200) {

            }
            else {

            }
        })
        .catch((error) => {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
            console.log(error.config);
        })
        .then(() => {

        });
    }

    static logout() {
        axios.post('/1/users/login')
        .then((response) => {

        })
        .catch((error) => {

        })
        .then(() => {

        });
    }



}
