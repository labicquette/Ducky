export class PostBan {

    /**
     * Post ban informations
     * @param {int} postId 
     * @param {Date} time 
     * @param {string} reason 
     */
    constructor(postId, time, reason) {
        this.postId = postId;
        this.time = time;
        this.reason = reason;
    }
}