export const GroupMemberStatus = {
    admin: 'admin', // group admin
    member: 'member', // simple member
    deleted: 'deleted', // deleted member
}


export class GroupMember {

    /**
     * Group Member
     * @param {int} groupId 
     * @param {int} userId 
     * @param {string} status 
     * @param {Date} membershipTime 
     */
    constructor(groupId, userId, status, membershipTime) {
        this.groupId = groupId;
        this.userId = userId;
        this.status = status;
        this.membershipTime = membershipTime;
    }
}