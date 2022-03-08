import { PostShare } from "../objects/posts/PostShare";

export class PostShareDAO {

    constructor(connection) {
        this.connection = connection;
    }

    /**
     * create post share
     * @param {PostShare} postShare 
     * @returns {boolean}
     */
    create(postShare) {
        //
        return false;
    }

    /**
     * update post share
     * @param {PostShare} postShare 
     * @returns {boolean}
     */
    update(postShare) {
        //
        return false;
    }
    
    /**
     * delete post share
     * @param {PostShare} postShare 
     * @returns {boolean}
     */
    delete(postShare) {
        //
        return false;
    }

    /**
     * @returns all posts shares
     */
    all() {
        let postShares = [];
        //
        return postShares;
    }

    /**
     * @param {int} postId 
     * @param {int} userId 
     * @returns shares by post id and user id
     */
    getByPostUser(postId, userId) {
        let postShares = [];
        //
        return postShares;
    }

    /**
     * @param {int} postId 
     * @returns shares by post id
     */
    getByPostId(postId) {
        let postShares = [];
        //
        return postShares;
    }   

    /**
     * @param {int} userId 
     * @returns shares by user id
     */
    getByUserId(userId) {
        let postShares = [];
        //
        return postShares;
    }

}