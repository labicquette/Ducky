import { UserFollow } from "../objects/users/UserFollow";

export class UserFollowDAO {

    constructor(connection) {
        this.connection = connection;
    }

    /**
     * create user follow
     * @param {UserFollow} userFollow 
     * @returns {boolean}
     */
    create(userFollow) {
        //
        return false;
    }

    /**
     * update user follow
     * @param {UserFollow} userFollow 
     * @returns {boolean}
     */
    update(userFollow) {
        //
        return false;
    }

    /**
     * delete user follow
     * @param {UserFollow} userFollow 
     * @returns {boolean}
     */
    delete(userFollow) {
        //
        return false;
    }

    /**
     * @returns all users follows
     */
    all() {
        let userFollows = [];
        //
        return userFollows;
    }

    /**
     * @param {int} userId 
     * @param {int} followedId 
     * @returns follows by users id
     */
     getByUsers(userId, followedId) {
        let userFollows = [];
        //
        return userFollows;
    }

    /**
     * Followings
     * @param {int} userId 
     * @returns follows by user id
     */
    getByUserId(userId) {
        let userFollows = [];
        //
        return userFollows;
    }   

    /**
     * Followers
     * @param {int} followedId 
     * @returns follows for user id
     */
    getForUserId(followedId) {
        let userFollows = [];
        //
        return userFollows;
    }

}