export const StorieGroupMemberStatus = {
    member: 'member',
    deleted: 'deleted',
    left: 'left'
};

export class StorieGroupMember {

    constructor(storieGroupId, userId, time, status) {
        this.storieGroupId = storieGroupId;
        this.userId = userId;
        this.time = time;
        this.status = status;
    }
}