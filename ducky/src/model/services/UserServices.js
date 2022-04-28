import axios from "axios";
import { User } from '../objects/User';

export class UserServices {


    static instance = axios.create({
			baseURL: 'http://localhost:4444/1/users/',
			timeout: 1000,
			headers: {'X-Custom-Header': 'foobar'}
	});

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

    static createUser(user) {
        user = new User();
        user.creation_time = new Date();
        this.instance.post('1/users/', {
            username: user.username,
            firstname: user.firstname, 
            lastname: user.lastname, 
            sex: user.sex, 
            phone: user.phone, 
            mail: user.mail, 
            city: user.city,
            country: user.country,
            birthday: user.birthday, 
            creation_time: new Date()
        })
        .then((response) => {
            console.log('Compte créé avec succès !')
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

        })
    }

}
