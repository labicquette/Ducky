import { Group } from "../objects/messages/Group";

export class GroupDAO {

    constructor(connection) {
        this.connection = connection;
    }

    /**
     * create a new group
     * @param {Group} group 
     * @returns {boolean}
     */
    create(group) {
        //
        return false;
    }

    /**
     * update group
     * @param {Group} group 
     * @returns {boolean}
     */
    update(group) {
        //
        return false;
    }

    /**
     * delete group
     * set the group status to deleted
     * @param {group} group 
     * @returns {boolean}
     */
    delete(group) {
        //
        return false;
    }

    /**
     * delete group by id
     * @param {int} groupId 
     * @returns {boolean}
     */
    deleteById(groupId) {
        //
        return false;
    }

    /**
     * @returns all groups
     */
    all() {
        let groups = [];
        //
        return groups;
    }

    /**
     * @param {int} groupId 
     * @returns group by id
     */
    getById(groupId) {
        let group = null;
        //
        return group;
    }

    /**
     * @param {int} groupId 
     * @return group member list
     */
    getMembers(groupId) {
        let users = [];
        //
        return users;
    }

    /**
     * @param {int} groupId 
     * @return group message list
     */
    getMessages(groupId) {
        let messages = [];
        //
        return messages;
    }
}