import { PostBan } from "../objects/posts/PostBan";

export class PostBanDAO {

    constructor(connection) {
        this.connection = connection;
    }

    /**
     * create post ban
     * @param {PostBan} postBan 
     * @returns {boolean}
     */
    create(postBan) {
        //
        return false;
    }

    /**
     * update post ban
     * @param {PostBan} postBan 
     * @returns {boolean}
     */
    update(postBan) {
        //
        return false;
    }

    /**
     * delete post ban
     * @param {PostBan} postBan 
     * @returns {boolean}
     */
    delete(postBan) {
        //
        return false;
    }

    /**
     * delete post ban by post id
     * @param {int} postId 
     * @returns {boolean}
     */
    deleteById(postId) {
        //
        return false;
    }

    /**
     * @returns {boolean} all posts ban
     */
    all() {
        let postBans = [];
        //
        return postBans;
    }

    /**
     * @param {int} postBan 
     * @returns {PostBan} post ban by post id
     */
    getById(postId) {
        let postBan = null;
        //
        return postBan;
    } 

    /**
     * @param {string} reason 
     * @returns post ban by reason
     */
    getByReason(reason) {
        let postBans = [];
        //
        return postBans;
    }

}