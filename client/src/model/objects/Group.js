export const GroupMemberStatus = {
    admin: 'admin',
    member: 'member',
    deleted: 'deleted',
}


export class GroupMember {

    constructor(userId, status, time) {
        this.userId = userId;
        this.status = status;
        this.time = time;
    }
}


export class Group {

    constructor(id,
                name,
                description,
                creation_time,
                ) {
        
        this.id = id;
        this.name = name;
        this.description = description;
        this.creation_time = creation_time;
        
        // Status
        this.deleted = false;

        // Members
        this.admins = [];
        this.members = [];

        // Messages
        this.messages = [];
    }
}