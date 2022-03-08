import { StorieGroup } from "../objects/stories/StorieGroup";

export class StorieGroupDAO {

    constructor(connection) {
        this.connection = connection;
    }

    create(storieGroup) {
        //
        return false;
    }

    update(storieGroup) {
        //
        return false;
    }

    delete(storieGroup) {
        //
        return false;
    }

    all() {
        let storieGroups = [];
        //
        return storieGroups;
    }

    getMembers(storieGroupId) {
        let storieGroupMembers = [];
        //
        return storieGroupMembers;
    }

    getByUserId(userId) {
        let storieGroups = [];
        //
        return storieGroups;
    }

    getByMemberUserId(userId) {
        let storieGroups = [];
        //
        return storieGroups;
    }

    getByName(name) {
        let storieGroups = [];
        //
        return storieGroups;
    }
}