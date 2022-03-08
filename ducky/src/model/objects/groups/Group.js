export const GroupStatus = {
    public: 'public',
    private: 'private',
    deleted: 'deleted'
};


export class Group {

    /**
     * Group
     * @param {int} id 
     * @param {string} name
     * @param {string} description 
     * @param {Date} creationTime 
     * @param {string} status 
     */
    constructor(id,
                name,
                description,
                creationTime,
                status) {
        
        this.id = id;
        this.name = name;
        this.description = description;
        this.creationTime = creationTime;
        this.status = status;

        // Members
        this.admins = []; // admin user id
        this.members = []; // member user id

        // Messages
        this.messages = [];
    }

    addAmin(userId) {
        this.admins.push(userId);
    }

    addMember(userId) {
        this.members.push(userId);
    }

    addMessage(message) {
        this.messages.push(message);
    }

}