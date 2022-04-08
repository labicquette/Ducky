export class StorieGroupMember {

    constructor(user_id, time, deleted) {
        this.user_id = user_id;
        this.time = time;
        this.deleted = deleted;
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