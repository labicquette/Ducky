import { UserView } from "../objects/users/UserView";

export class UserViewDAO {

    constructor(connection) {
        this.connection = connection;
    }

    /**
     * create user view
     * @param {UserView} userView 
     * @returns {boolean}
     */
    create(userView) {
        //
        return false;
    }

    /**
     * update user view
     * @param {UserView} userView 
     * @returns {boolean}
     */
    update(userView) {
        //
        return false;
    }

    /**
     * delete user view
     * @param {UserView} userView 
     * @returns {boolean}
     */
    delete(userView) {
        //
        return false;
    }

    /**
     * @returns all users views
     */
    all() {
        let userViews = [];
        //
        return userViews;
    }

    /**
     * @param {int} userId 
     * @param {int} viewedId 
     * @returns views by users id
     */
     getByUsers(userId, viewedId) {
        let userViews = [];
        //
        return userViews;
    }

    /**
     * @param {int} userId 
     * @returns views by user id
     */
    getByUserId(userId) {
        let userViews = [];
        //
        return userViews;
    }   

    /**
     * @param {int} viewedId 
     * @returns views for user id
     */
    getForUserId(viewedId) {
        let userViews = [];
        //
        return userViews;
    }

}