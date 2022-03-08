import { UserBan } from "../objects/users/UserBan";

export class UserBanDAO {

    constructor(connection) {
        this.connection = connection;
    }

    /**
     * create user ban
     * @param {UserBan} userBan 
     * @returns {boolean}
     */
    create(userBan) {
        //
        return false;
    }

    /**
     * update user ban
     * @param {UserBan} userBan 
     * @returns {boolean}
     */
    update(userBan) {
        //
        return false;
    }

    /**
     * delete user ban
     * @param {UserBan} userBan 
     * @returns {boolean}
     */
    delete(userBan) {
        //
        return false;
    }

    /**
     * delete user ban by user id
     * @param {int} userId 
     * @returns {boolean}
     */
    deleteById(userId) {
        //
        return false;
    }

    /**
     * @returns {boolean} all users ban
     */
    all() {
        let userBans = [];
        //
        return userBans;
    }

    /**
     * @param {int} userBan 
     * @returns {UserBan} user ban by user id
     */
    getById(userId) {
        let userBan = null;
        //
        return userBan;
    } 

    /**
     * @param {string} reason 
     * @returns user ban by reason
     */
    getByReason(reason) {
        let userBans = [];
        //
        return userBans;
    }

    /**
     * @param {Date} time 
     * @returns user ban by time
     */
    getByTime(time) {
        let userBans = [];
        //
        return userBans;
    }

    /**
     * @param {Date} endTime
     * @returns bans finished by the specified time
     */
    getByEndTime(endTime) {
        let userBans = [];
        //
        return userBans;
    }

}