import { GroupMessageLike } from "../objects/groups/GroupMessageLike";

export class GroupMessageLikeDAO {

    constructor(connection) {
        this.connection = connection;
    }

    create(groupMessageLike) {
        //
        return false;
    }

    update(groupMessageLike) {
        //
        return false;
    }

    delete(groupMessageLike) {
        //
        return false;
    }

    deleteByGroupMessageId(groupMessageId) {
        //
        return false;
    }

    deleteByGroupMessageUser(groupMessageId, userId) {
        //
        return false;
    }

    all() {
        let groupMessageLikes = [];
        //
        return groupMessageLikes;
    }

    getByGroupMessageId(groupMessageId) {
        let groupMessageLikes = [];
        //
        return groupMessageLikes;
    }

    getByUserId(userId) {
        let groupMessageLikes = [];
        //
        return groupMessageLikes;
    }

    getByGroupMessageUser(groupMessageId, userId) {
        let groupMessageLike = null;
        //
        return groupMessageLike;
    }

}