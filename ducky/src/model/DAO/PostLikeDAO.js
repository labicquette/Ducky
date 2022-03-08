import { PostLike } from "../objects/posts/PostLike";

export class PostLikeDAO {

    constructor(connection) {
        this.connection = connection;
    }

    /**
     * create post like
     * @param {PostLike} postLike 
     * @returns {boolean}
     */
    create(postLike) {
        //
        return false;
    }

    /**
     * update post like
     * @param {PostLike} postLike 
     * @returns {boolean}
     */
    update(postLike) {
        //
        return false;
    }
    
    /**
     * delete post like
     * @param {PostLike} postLike 
     * @returns {boolean}
     */
    delete(postLike) {
        //
        return false;
    }

    /**
     * @returns all posts likes
     */
    all() {
        let postLikes = [];
        //
        return postLikes;
    }

    /**
     * @param {int} postId 
     * @param {int} userId 
     * @returns likes by post id and user id
     */
     getByPostUser(postId, userId) {
        let postLikes = [];
        //
        return postLikes;
    }

    /**
     * @param {int} postId 
     * @returns likes by post id
     */
    getByPostId(postId) {
        let postLikes = [];
        //
        return postLikes;
    }   

    /**
     * @param {int} userId 
     * @returns likes by user id
     */
    getByUserId(userId) {
        let postLikes = [];
        //
        return postLikes;
    }

}