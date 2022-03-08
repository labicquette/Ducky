import { User } from "../objects/users/User";
import { UserBanDAO } from "./UserBanDAO";
import { UserBlockDAO } from "./UserBlockDAO";
import { UserFollowDAO } from "./UserFollowDAO";
import { UserReportDAO } from "./UserReportDAO";
import { UserViewDAO } from "./UserViewDAO";

export class UserDAO {

    constructor(connection) {
        this.connection = connection;    
    }

    /**
     * create new user
     * @param {User} user 
     * @returns {boolean}
     */
    create(user) {
        //
        return false;
    }

    /**
     * update user
     * @param {User} user 
     * @returns {boolean}
     */
    update(user) {
        //
        return false;
    }

    /**
     * delete User
     * @param {User} user 
     * @returns {boolean}
     */
    delete(user) {
        //
        return false;
    }

    /**
     * @returns list of all users
     */
    all() {
        let users = [];
        //
        return users;
    }

    /**
     * @param {int} userId 
     * @return {User} user by id 
     */
    getById(userId) {
        let user = null;
        //
        return user;
    }

    /**
     * @param {int} userId 
     * @returns list of user's followers
     */
    getFollowers(userId) {
        let userFollows = [];
        //
        return userFollows;
    }

    /**
     * @param {int} userId 
     * @returns list of user's followings
     */
    getFollowings(userId) {
        let userFollows = [];
        //
        return userFollows;
    }

    /**
     * @param {int} userId 
     * @returns view list by other users
     */
    getViews(userId) {
        let userViews = [];
        //
        return userViews;
    }

    /**
     * @param {int} userId 
     * @returns list of users seen by the user
     */
    getViewedUsers(userId) {
        let userViews = [];
        //
        return userViews;
    }

    /**
     * @param {int} userId 
     * @returns list of users who blocked the user
     */
    getBlocks(userId) {
        let userBlocks = [];
        //
        return userBlocks;
    }

    /**
     * @param {int} userId 
     * @returns user's blocked contact list
     */
    getBlockedUsers(userId) {
        let userBlocks = [];
        //
        return userBlocks;
    }


    /**
     * @param {int} userId 
     * @returns list of users who reported the user
     */
     getReports(userId) {
        let userReports = [];
        //
        return userReports;
    }

    /**
     * @param {int} userId 
     * @returns user's reported contact list
     */
    getReportedUsers(userId) {
        let userReports = [];
        //
        return userReports;
    }

    /**
     * @param {int} userId 
     * @returns list of user groups
     */
    getGroups(userId) {
        let groups = [];
        // 
        return groups;
    }

    /**
     * banish by user id
     * @param {int} userId 
     * @returns {boolean}
     */
    banishById(userId) {
        //
        return false;
    }

    /**
     * update account status
     * @param {string} userId 
     * @param {string} status 
     * @returns {boolean}
     */
    setAccountStatus(userId, status) {
        //
        return false;
    }

    /**
     * update online status
     * @param {int} userId 
     * @param {string} status 
     * @returns {boolean}
     */
    setOnlineStatus(userId, status) {
        //
        return false;
    }
}