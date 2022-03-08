import { PostReport } from "../objects/posts/PostReport";

export class PostReportDAO {

    constructor(connection) {
        this.connection = connection;
    }

    /**
     * create post report
     * @param {PostReport} postReport 
     * @returns {boolean}
     */
    create(postReport) {
        //
        return false;
    }

    /**
     * update post report
     * @param {PostReport} postReport 
     * @returns {boolean}
     */
    update(postReport) {
        //
        return false;
    }
    
    /**
     * delete post report
     * @param {PostReport} postReport 
     * @returns {boolean}
     */
    delete(postReport) {
        //
        return false;
    }

    /**
     * @returns all posts reports
     */
    all() {
        let postReports = [];
        //
        return postReports;
    }

    /**
     * @param {int} postId 
     * @param {int} userId 
     * @returns reports by post id and user id
     */
    getByPostUser(postId, userId) {
        let postReports = [];
        //
        return postReports;
    }

    /**
     * @param {int} postId 
     * @returns reports by post id
     */
    getByPostId(postId) {
        let postReports = [];
        //
        return postReports;
    }   

    /**
     * @param {int} userId 
     * @returns reports by user id
     */
    getByUserId(userId) {
        let postReports = [];
        //
        return postReports;
    }

    /**
     * @param {string} reason 
     * @returns reports by reason
     */
    getByReason(reason) {
        let postReports = [];
        //
        return postReports;
    }

}