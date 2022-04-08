export const StorieGroupMemberStatus = {
    member: 'member',
    deleted: 'deleted',
    left: 'left'
};

export class StorieGroupMember {

    constructor(user_id, time, status) {
        this.user_id = user_id;
        this.time = time;
        this.status = status;
    }
}

export class StorieGroup {

    constructor(id,
                name,
                description,
                creationTime
                ) {
        
        this.id = id;
        this.name = name;
        this.description = description;
        this.creationTime = creationTime;
        this.deleted = false;

        this.members = [];
    }
}