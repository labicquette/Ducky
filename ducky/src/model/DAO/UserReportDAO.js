import { UserReport } from "../objects/users/UserReport";

export class UserReportDAO {

    constructor(connection) {
        this.connection = connection;
    }

    /**
     * create user report
     * @param {UserReport} userReport 
     * @returns {boolean}
     */
    create(userReport) {
        //
        return false;
    }

    /**
     * update user report
     * @param {UserReport} userReport 
     * @returns {boolean}
     */
    update(userReport) {
        //
        return false;
    }

    /**
     * delete user report
     * @param {UserReport} userReport 
     * @returns {boolean}
     */
    delete(userReport) {
        //
        return false;
    }

    /**
     * @returns all users reports
     */
    all() {
        let userReports = [];
        //
        return userReports;
    }

    /**
     * @param {int} userId 
     * @param {int} reportedId 
     * @returns reports by users id
     */
     getByUsers(userId, reportedId) {
        let userReports = [];
        //
        return userReports;
    }

    /**
     * @param {int} userId 
     * @returns reports by user id
     */
    getByUserId(userId) {
        let userReports = [];
        //
        return userReports;
    }   

    /**
     * @param {int} reportedId 
     * @returns reports for user id
     */
    getForUserId(reportedId) {
        let userReports = [];
        //
        return userReports;
    }

    /**
     * @param {string} reason 
     * @returns reports by reason
     */
    getByReason(reason) {
        let userReports = [];
        //
        return userReports;
    }
    
}