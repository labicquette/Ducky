import { UserBlock } from "../objects/users/UserBlock";

export class UserBlockDAO {

    constructor(connection) {
        this.connection = connection;
    }

    /**
     * create user block
     * @param {UserBlock} userBlock 
     * @returns {boolean}
     */
    create(userBlock) {
        //
        return false;
    }

    /**
     * update user block
     * @param {UserBlock} userBlock 
     * @returns {boolean}
     */
    update(userBlock) {
        //
        return false;
    }

    /**
     * delete user block
     * @param {UserBlock} userBlock 
     * @returns {boolean}
     */
    delete(userBlock) {
        //
        return false;
    }

    /**
     * @returns all users blocks
     */
    all() {
        let userBlocks = [];
        //
        return userBlocks;
    }

    /**
     * @param {int} userId 
     * @param {int} blockedId 
     * @returns blocks by users id
     */
     getByUsers(userId, blockedId) {
        let userBlocks = [];
        //
        return userBlocks;
    }

    /**
     * @param {int} userId 
     * @returns blocks by user id
     */
    getByUserId(userId) {
        let userBlocks = [];
        //
        return userBlocks;
    }   

    /**
     * @param {int} blockedId 
     * @returns blocks for user id
     */
    getForUserId(blockedId) {
        let userBlocks = [];
        //
        return userBlocks;
    }

    /**
     * @param {string} reason 
     * @returns blocks by reason
     */
    getByReason(reason) {
        let userBlocks = [];
        //
        return userBlocks;
    }
    
}