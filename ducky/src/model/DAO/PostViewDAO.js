import { PostView } from "../objects/posts/PostView";

export class PostViewDAO {

    constructor(connection) {
        this.connection = connection;
    }

    /**
     * create post view
     * @param {PostView} postView 
     * @returns {boolean}
     */
    create(postView) {
        //
        return false;
    }

    /**
     * update post view
     * @param {PostView} postView 
     * @returns {boolean}
     */
    update(postView) {
        //
        return false;
    }
    
    /**
     * delete post view
     * @param {PostView} postView 
     * @returns {boolean}
     */
    delete(postView) {
        //
        return false;
    }

    /**
     * @returns all posts views
     */
    all() {
        let postViews = [];
        //
        return postViews;
    }

    /**
     * @param {int} postId 
     * @param {int} userId 
     * @returns views by post id and user id
     */
     getByPostUser(postId, userId) {
        let postViews = [];
        //
        return postViews;
    }

    /**
     * @param {int} postId 
     * @returns views by post id
     */
    getByPostId(postId) {
        let postViews = [];
        //
        return postViews;
    }   

    /**
     * @param {int} userId 
     * @returns views by user id
     */
    getByUserId(userId) {
        let postViews = [];
        //
        return postViews;
    }

}