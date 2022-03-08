import { StorieGroupMember } from "../objects/stories/StorieGroupMember";

export class StorieGroupMemberDAO {

    constructor(connection) {
        this.connection = connection;
    }

    create(storieGroupMember) {
        //
        return false;
    }

    update(storieGroupMember) {
        //
        return false;
    }

    delete(storieGroupMember) {
        //
        return false;
    }

    all() {
        let storieGroupMembers = [];
        //
        return storieGroupMembers;
    }

    getByStorieGroupId(storieGroupId) {
        let storieGroupMembers = [];
        //
        return storieGroupMembers;
    }

    getByUserId(userId) {
        let storieGroupMembers = [];
        //
        return storieGroupMembers;
    }
}