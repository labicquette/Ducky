import { PostMentionnedUser } from "../objects/posts/PostMentionnedUser";

export class PostMentionnedUserDAO {

    constructor(connection) {
        this.connection = connection;
    }

    create(postMentionnedUser) {
        //
        return false;
    }

    update(postMentionnedUser) {
        //
        return false;
    }

    delete(postMentionnedUser) {
        //
        return false;
    }

    deleteByPostId(postId) {
        //
        return false;
    }

    all() {
        let postMentionnedUsers = [];
        //
        return postMentionnedUsers;
    }

    getByPostId(postId) {
        let postMentionnedUsers = [];
        //
        return postMentionnedUsers;
    }

    getByMentionnedUser(userId) {
        let postMentionnedUsers = [];
        //
        return postMentionnedUsers;
    }
    
}