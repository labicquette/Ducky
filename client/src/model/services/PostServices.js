import axios from "axios";

export class PostServices {

    static instance = axios.create({
		baseURL: 'http://localhost:4444',
		timeout: 1000,
        withCredentials: true,
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:4444',
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

    static createPost(post, success, failure) {
        this.instance.post('/1/posts', {
            user_id: post.user_id,
            reply_to_id: post.reply_to_id,
            time: new Date(),
            text: post.text,
            location: post.location,
            private: post.private,
            media: post.media,
            polls: post.polls,
            hashtags: post.hashtags,
            mentionned_users_ids: post.mentionned_users_ids,
        })
        .then((response) => {success(response)})
        .catch((error) => {
            this.consoleError(error);
            failure(error);
        })
        .then(() => {});
    }

    static updatePost(post, success, failure) {
        this.instance.patch('/1/posts/' + post.id, {
            user_id: post.user_id,
            reply_to_id: post.reply_to_id,
            text: post.text,
            location: post.location,
            private: post.private,
            deleted: post.deleted,
            banished: post.banished,
            ban_reason: post.ban_reason,
            media: post.media,
            polls: post.polls,
            hashtags: post.hashtags,
            mentionned_users_ids: post.mentionned_users_ids
        }, {
            post_id: post.id,
        })
        .then((response) => {success(response)})
        .catch((error) => {
            this.consoleError(error);
            failure(error);
        })
        .then(() => {});    
    }

    static deletePost(post_id, success, failure) {
        this.instance.delete('/1/posts/' + post_id, {
            post_id: post_id,
        })
        .then((response) => {success(response)})
        .catch((error) => {
            this.consoleError(error);
            failure(error);
        })
        .then(() => {});
    }

    static getPost(post_id, success, failure) {
        this.instance.get('/1/posts/' + post_id, {
            post_id: post_id,
        })
        .then((response) => {success(response)})
        .catch((error) => {
            this.consoleError(error);
            failure(error);
        })
        .then(() => {});
    }

    static getAllPosts(success, failure) {
        this.instance.get('/1/posts/all')
        .then((response) => {success(response)})
        .catch((error) => {
            this.consoleError(error);
            failure(error);
        })
        .then(() => {});
    }

    static getPosts(posts_ids, success, failure) {
        this.instance.get('/1/posts/', {
            posts_ids: posts_ids.join(','),
        })
        .then((response) => {success(response)})
        .catch((error) => {
            this.consoleError(error);
            failure(error);
        })
        .then(() => {});
    }

    static getPostsByUser(user_id, success, failure) {
        this.instance.get('/1/posts/by/user/' + user_id, {
            user_id: user_id,
        })
        .then((response) => {success(response)})
        .catch((error) => {
            this.consoleError(error);
            failure(error);
        })
        .then(() => {});     
    }

    static getPostsByMentionnedUsers(users_ids, success, failure) {
        this.instance.get('/1/posts/by', {
            mentionned_users_ids: users_ids.join(',')
        })
        .then((response) => {success(response)})
        .catch((error) => {
            this.consoleError(error);
            failure(error);
        })
        .then(() => {});
    }

    static getPostsByHashtags(hashtags, success, failure) {
        this.instance.get('/1/posts/by', {
            hashtags: hashtags.join(',')
        })
        .then((response) => {success(response)})
        .catch((error) => {
            this.consoleError(error);
            failure(error);
        })
        .then(() => {});
    }

    static getPostLkes(post_id, success, failure) {
        this.instance.get('/1/posts/' + post_id + '/likes', {
            post_id: post_id,
        })
        .then((response) => {success(response)})
        .catch((error) => {
            this.consoleError(error);
            failure(error);
        })
        .then(() => {});
    }

    static addPostLike(post_id, user_id, success, failure) {
        this.instance.post('/1/posts/' + post_id + '/likes', {
            post_id: post_id,
            user_id: user_id,
            time: new Date(),
        }, {
            post_id: post_id,
        })
        .then((response) => {success(response)})
        .catch((error) => {
            this.consoleError(error);
            failure(error);
        })
        .then(() => {});
    }

    static delPostLike(post_id, user_id, success, failure) {
        this.instance.delete('/1/posts/' + post_id + '/likes/' + user_id, {
            post_id: post_id,
            user_id: user_id,
        })
        .then((response) => {success(response)})
        .catch((error) => {
            this.consoleError(error);
            failure(error);
        })
        .then(() => {});
    }

}