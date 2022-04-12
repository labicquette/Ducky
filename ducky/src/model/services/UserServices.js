import { User } from '../objects/User';

export class UserServices {

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

    static logout() {

    }

}
