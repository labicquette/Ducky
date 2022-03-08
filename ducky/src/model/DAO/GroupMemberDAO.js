import { GroupMember } from "../objects/groups/GroupMember";

export class GroupMemberDAO {

    constructor(connection) {
        this.connection = connection;
    }

    /**
     * create group member
     * @param {GroupMember} groupMember 
     * @returns {boolean}
     */
    create(groupMember) {
        //
        return false;
    }

    /**
     * update group member
     * @param {GroupMember} groupMember 
     * @returns {boolean}
     */
    update(groupMember) {
        //
        return false;
    }

    /**
     * delete group memeber
     * @param {GroupMember} groupMember 
     * @returns {boolean}
     */
    delete(groupMember) {
        //
        return false;
    }

    /**
     * @returns all groups members
     */
    all() {
        let members = [];
        //
        return members;
    }

    /**
     * @param {int} groupId 
     * @returns list of group members
     */
    getMembers(groupId) {
        let members = [];
        //
        return members;
    }

    /**
     * @param {int} groupId 
     * @returns list of group admin
     */
    getAdmins(groupId) {
        let members = [];
        //
        return members;
    }

    /**
     * @param {int} groupId 
     * @returns list of deleted group members
     */
    getDeletedMembers(groupId) {
        let members = [];
        //
        return members;
    }

}