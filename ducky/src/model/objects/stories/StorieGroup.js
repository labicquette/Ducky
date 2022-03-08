export const StorieGroupStatus = {
    default: 'default', // public group
    private: 'private',
    deleted: 'deleted'
};

export class StorieGroup {

    constructor(id,
                userId,
                name,
                description,
                creationTime,
                status
                ) {
        
        this.id = id;
        this.userId = userId;
        this.name = name;
        this.description = description;
        this.creationTime = creationTime;
        this.status = status;

        this.members = [];
    }

    addMember(userId) {
        this.members.push(userId);
    }
}