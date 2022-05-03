import axios from "axios";

export class UserServices {

    static instance = axios.create({
		baseURL: 'http://localhost:4444',
		timeout: 1000,
        withCredentials: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'X-Custom-Header': 'foobar'
        }
	});

    static consoleError(error) {
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

    static login(username, password, success, failure) {
        this.instance.post('/1/users/login', {
            username: username,
            mail: username,
            phone: username,
            password: password,
        })
        .then((response) => {success(response)})
        .catch((error) => {
            this.consoleError(error);
            failure(error);
        })
        .then(() => {});
    }

    static logout(user_id, success, failure) {
        this.instance.post('/1/users/:user_id/logout', null, {
            user_id: user_id,
        })
        .then((response) => {success(response)})
        .catch((error) => {failure(error)})
        .then(() => {});
    }

    static createUser(user, success, failure) {
        this.instance.post('/1/users', {
            username: user.username,
            password: user.password,
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
        .then((response) => {success(response)})
        .catch((error) => {
            this.consoleError(error);
            failure(error);
        })
        .then(() => {});
    }

    static getUsers(users_ids, success, failure) {
        this.instance.get('/1/users', {
            users_ids: users_ids.join(','),
        })
        .then((response) => {success(response)})
        .catch((error) => {
            this.consoleError(error);
            failure(error);
        })
        .then(() => {});
    }

    static getUser(user_id, success, failure) {
        this.instance.get('/1/users/:user_id', {
            user_id: user_id,
        })
        .then((response) => {success(response)})
        .catch((error) => {
            this.consoleError(error);
            failure(error);
        })
        .then(() => {});
    }

    static getUserMe(success, failure) {
        this.instance.get('/1/users/me')
        .then((response) => {success(response)})
        .catch((error) => {
            this.consoleError(error);
            failure(error);
        })
        .then(() => {});
    }

    static getUserByUsername(username, success, failure) {
        this.instance.get('/1/users/by/username/:username', {
            username: username,
        })
        .then((response) => {success(response)})
        .catch((error) => {
            this.consoleError(error);
            failure(error);
        })
        .then(() => {});
    }

    static updateUser(user, success, failure) {
        this.instance.patch('/1/users/:user_id', {
            username: user.username,
            password: user.password,
            firstname: user.firstname, 
            lastname: user.lastname, 
            sex: user.sex, 
            phone: user.phone, 
            mail: user.mail, 
            city: user.city,
            country: user.country,
            birthday: user.birthday, 
            biography: user.biography
        }, {
            user_id: user.id,
        })
        .then((response) => {success(response)})
        .catch((error) => {
            this.consoleError(error);
            failure(error);
        })
        .then(() => {});
    }

    static deleteUser(user_id, success, failure) {
        this.instance.delete('/1/users/:user_id', {
            user_id: user_id,
        })
        .then((response) => {success(response)})
        .catch((error) => {
            this.consoleError(error);
            failure(error);
        })
        .then(() => {});
    }

    static getFollowers(user_id, success, failure) {
        this.instance.get('/1/users/:user_id/followers', {
            user_id: user_id,
        })
        .then((response) => {success(response)})
        .catch((error) => {
            this.consoleError(error);
            failure(error);
        })
        .then(() => {});
    }

    static getFollowings(user_id, success, failure) {
        this.instance.get('/1/users/:user_id/followings', {
            user_id: user_id,
        })
        .then((response) => {success(response)})
        .catch((error) => {
            this.consoleError(error);
            failure(error);
        })
        .then(() => {});
    }

    static addFollower(user_id, follower_id, success, failure) {
        this.instance.post('/1/users/:user_id/followers', {
            follower_id: follower_id,
            time: new Date(),
        }, {
            user_id: user_id,
        })
        .then((response) => {success(response)})
        .catch((error) => {
            this.consoleError(error);
            failure(error);
        })
        .then(() => {});
    }

    static addFollowing(user_id, following_id, success, failure) {
        this.instance.post('/1/users/:user_id/followings', {
            following_id: following_id,
            time: new Date(),
        }, {
            user_id: user_id,
        })
        .then((response) => {success(response)})
        .catch((error) => {
            this.consoleError(error);
            failure(error);
        })
        .then(() => {});
    }

    static delFollower(user_id, follower_id, success, failure) {
        this.instance.delete('1/users/:user_id/followers/:follower_id', {
            user_id: user_id,
            follower_id: follower_id,
        })
        .then((response) => {success(response)})
        .catch((error) => {
            this.consoleError(error);
            failure(error);
        })
        .then(() => {});
    }
    
    static delFollowing(user_id, following_id, success, failure) {
        this.instance.delete('/1/users/:user_id/followings/:following_id', {
            user_id: user_id,
            following_id: following_id,
        })        
        .then((response) => {success(response)})
        .catch((error) => {
            this.consoleError(error);
            failure(error);
        })
        .then(() => {});
    }

    static getBlocks(user_id, success, failure) {
        this.instance.get('/1/users/:user_id/blocks', {
            user_id: user_id,
        })
        .then((response) => {success(response)})
        .catch((error) => {
            this.consoleError(error);
            failure(error);
        })
        .then(() => {});
    }

    static getBlocksBy(user_id, success, failure) {
        this.instance.get('/1/users/:user_id/blocksby', {
            user_id: user_id,
        })
        .then((response) => {success(response)})
        .catch((error) => {
            this.consoleError(error);
            failure(error);
        })
        .then(() => {});
    }

    static addBlock(user_id, blocked_id, reason, success, failure) {
        this.instance.post('/1/users/:user_id/blocks', {
            blocked_id: blocked_id,
            time: new Date(),
            reason: reason,
        }, {
            user_id: user_id,
        })
        .then((response) => {success(response)})
        .catch((error) => {
            this.consoleError(error);
            failure(error);
        })
        .then(() => {});
    }

    static delBlock(user_id, blocked_id, success, failure) {
        this.instance.delete('/1/users/:user_id/blocks', {
            user_id: user_id,
            blocked_id: blocked_id,
        })
        .then((response) => {success(response)})
        .catch((error) => {
            this.consoleError(error);
            failure(error);
        })
        .then(() => {});
    }

    static getReports(user_id, success, failure) {
        this.instance.get('/1/users/:user_id/reports', {
            user_id: user_id,
        })
        .then((response) => {success(response)})
        .catch((error) => {
            this.consoleError(error);
            failure(error);
        })
        .then(() => {});
    }

    static getReportsBy(user_id, success, failure) {
        this.instance.get('/1/users/:user_id/reportsby', {
            user_id: user_id,
        })
        .then((response) => {success(response)})
        .catch((error) => {
            this.consoleError(error);
            failure(error);
        })
        .then(() => {});
    }

    static addReport(user_id, reported_id, reason, success, failure) {
        this.instance.post('/1/users/:user_id/reports', {
            reported_id: reported_id,
            time: new Date(),
            reason: reason,
        }, {
            user_id: user_id,
        })
        .then((response) => {success(response)})
        .catch((error) => {
            this.consoleError(error);
            failure(error);
        })
        .then(() => {});
    }

    static getViews(user_id, success, failure) {
        this.instance.get('/1/users/:user_id/views', {
            user_id: user_id,
        })
        .then((response) => {success(response)})
        .catch((error) => {
            this.consoleError(error);
            failure(error);
        })
        .then(() => {});
    }

    static getViewsBy(user_id, success, failure) {
        this.instance.get('/1/users/:user_id/viewsby', {
            user_id: user_id,
        })
        .then((response) => {success(response)})
        .catch((error) => {
            this.consoleError(error);
            failure(error);
        })
        .then(() => {});
    }

    static addView(user_id, viewed_id, success, failure) {
        this.instance.post('/1/users/:user_id/views', {
            viewed_id: viewed_id,
            time: new Date(),
        }, {
            user_id: user_id,
        })
        .then((response) => {success(response)})
        .catch((error) => {
            this.consoleError(error);
            failure(error);
        })
        .then(() => {});
    }

    static getUserMessages(user_id, success, failure) {
        this.instance.get('/1/users/:user_id/messages', {
            user_id: user_id,
        })
        .then((response) => {success(response)})
        .catch((error) => {
            this.consoleError(error);
            failure(error);
        })
        .then(() => {});
    }

    static createUserMessages(user_id, 
                            type, 
                            messages_id,
                            other_user_id, 
                            group_id, 
                            success, 
                            failure) {
        this.instance.post('/1/users/:user_id/messages', {
            type: type,
            messages_id: messages_id,
            other_user_id: other_user_id,
            group_id: group_id,
        }, {
            user_id: user_id,
        })
        .then((response) => {success(response)})
        .catch((error) => {
            this.consoleError(error);
            failure(error);
        })
        .then(() => {});
    }    

    static updateUserMessages(user_id, 
                            messages_id, 
                            other_user_id, 
                            group_id, 
                            success, 
                            failure) {
        this.instance.patch('/1/users/:user_id/messages', {
            messages_id: messages_id,
            other_user_id: other_user_id,
            group_id: group_id,
        }, {
            user_id: user_id,
        })
        .then((response) => {success(response)})
        .catch((error) => {
            this.consoleError(error);
            failure(error);
        })
        .then(() => {});
    }

    static deleteUserSimpleMessages(user_id, other_user_id, success, failure) {
        this.instance.delete('/1/users/:user_id/messages/simple/:other_user_id', {
            user_id: user_id,
            other_user_id: other_user_id,
        })
        .then((response) => {success(response)})
        .catch((error) => {
            this.consoleError(error);
            failure(error);
        })
        .then(() => {});
    }

    static deleteUserGroupMessages(user_id, group_id, success, failure) {
        this.instance.delete('/1/users/:user_id/messages/group/:group_id', {
            user_id: user_id,
            group_id: group_id,
        })
        .then((response) => {success(response)})
        .catch((error) => {
            this.consoleError(error);
            failure(error);
        })
        .then(() => {});
    }

    static getUserPosts(user_id, success, failure) {
        this.instance.get('/1/users/:user_id/posts', {
            user_id: user_id,
        })
        .then((response) => {success(response)})
        .catch((error) => {
            this.consoleError(error);
            failure(error);
        })
        .then(() => {});
    } 

    static addUserPost(user_id, post_id, success, failure) {
        this.insatnce.post('/1/users/:user_id/posts', {
            post_id: post_id,
        }, {
            user_id: user_id,
        })
        .then((response) => {success(response)})
        .catch((error) => {
            this.consoleError(error);
            failure(error);
        })
        .then(() => {});
    }

    static delUserPost(user_id, post_id, success, failure) {
        this.instance.delete('/1/users/:user_id/posts/:post_id', {
            user_id: user_id,
            post_id: post_id,
        })
        .then((response) => {success(response)})
        .catch((error) => {
            this.consoleError(error);
            failure(error);
        })
        .then(() => {});
    }

    static getUserLikedPosts(user_id, success, failure) {
        this.instance.get('/1/users/:user_id/likedposts', {
            user_id: user_id,
        })
        .then((response) => {success(response)})
        .catch((error) => {
            this.consoleError(error);
            failure(error);
        })
        .then(() => {});
    }

    static addUserLikedPost(user_id, post_id, success, failure) {
        this.instance.post('/1/users/:user_id/likedposts', {
            post_id: post_id,
        }, {
            user_id: user_id,
        })
        .then((response) => {success(response)})
        .catch((error) => {
            this.consoleError(error);
            failure(error);
        })
        .then(() => {});
    }

    static delUserLikedPost(user_id, post_id, success, failure) {
        this.instance.delete('/1/users/:user_id/likedposts/:post_id', {
            user_id: user_id,
            post_id: post_id,
        })
        .then((response) => {success(response)})
        .catch((error) => {
            this.consoleError(error);
            failure(error);
        })
        .then(() => {});
    }

}
