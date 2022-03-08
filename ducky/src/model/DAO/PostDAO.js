import { Post } from "../objects/posts/Post";
import { PostBan } from "./PostBanDAO";
import { PostLikeDAO } from "./PostLikeDAO";
import { PostReportDAO } from "./PostReportDAO";
import { PostShareDAO } from "./PostShareDAO";
import { PostViewDAO } from "./PostViewDAO";

export class PostDAO {

    constructor(connection) {
        this.connection = connection;    
    }

    /**
     * create a new post
     * @param {Post} post 
     * @returns {boolean}
     */
    create(post) {
        //
        return false;
    }

    /**
     * update post
     * @param {Post} post 
     * @returns {boolean}
     */
    update(post) {
        //
        return false;
    }

    /**
     * delete post
     * @param {Post} post 
     * @returns {boolean}
     */
    delete(post) {
        //
        return false;
    }

    /**
     * @param {int} postId 
     * @returns {boolean}
     */
    deleteById(postId) {
        //
        return false;
    }

    /**
     * @returns all posts
     */
    all() {
        let posts = [];
        //
        return posts;
    }

    /**
     * @param {int} postId 
     * @returns {Post} post by id
     */
    getById(postId) {
        let post = null;
        //
        return post;
    }

    /**
     * @param {int} postId 
     * @returns list of post like
     */
    getLikes(postId) {
        let postLikes = [];
        //
        return postLikes;
    }

    /**
     * @param {int} postId 
     * @returns list of post views
     */
     getReports(postId) {
        let postReports = [];
        //
        return postReports;
    }

    /**
     * @param {int} postId 
     * @returns list of post shares
     */
    getShares(postId) {
        let postShares = [];
        //
        return postShares;
    }
    
    /**
     * @param {int} postId 
     * @returns list of post views
     */
     getViews(postId) {
        let postViews = [];
        //
        return postViews;
    }

    /**
     * @param {int} userId 
     * @returns list of user posts
     */
    getByUser(userId) {
        let posts = [];
        //
        return posts;
    }

    /**
     * @param {int} postId 
     * @returns list of posts that are a reply to the post
     */
    getByReplyTo(postId) {
        let posts = [];
        //
        return posts;
    }

    /**
     * @param {list} hashtags list of hashtags
     * @returns list of posts with hashtags
     */
    getByHashtags(hashtags) {
        let posts = [];
        //
        return posts;
    }

    /**
     * @param {int} userId 
     * @returns list of posts with mentionned user
     */
    getByMentionnedUser(userId) {
        let posts = [];
        //
        return posts;
    }

    /**
     * @param {Date} start 
     * @param {Date} end now, if not specified
     * @returns list of posts between the start and the end
     */
    getByTime(start, end) {
        let posts = [];
        //
        return posts;
    }   

    /**
     * banish post by id
     * @param {int} postId 
     * @param {string} reason
     * @returns {boolean}
     */
    banishById(postId, reason) {
        //
        return false;
    }

    /**
     * update post status
     * @param {int} postId 
     * @param {string} status 
     */
    setStatus(postId, status) {
        //
        return false;
    }

}