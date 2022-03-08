import { PostHashtag } from "../objects/posts/PostHashtag";

export class PostHashtagDAO {

    constructor(connection) {
        this.connection = connection;
    }

    create(postHashtag) {
        //
        return false;
    }

    update(postHashtag) {
        //
        return false;
    }

    delete(postHashtag) {
        //
        return false;
    }

    deleteByPostId(postId) {
        //
        return false;
    }

    all() {
        let postHashtags = [];
        //
        return postHashtags;
    }

    getByPostId(postId) {
        let postHashtags = [];
        //
        return postHashtags;
    }

    getByHashtag(hashtag) {
        let postHashtags = [];
        //
        return postHashtags;
    }
    
}