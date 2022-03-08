import { MessageLike } from "../objects/messages/MessageLike";

export class MessageLikeDAO {

    constructor(connection) {
        this.connection = connection;
    }

    create(messageLike) {
        //
        return false;
    }

    update(messageLike) {
        //
        return false;
    }

    delete(messageLike) {
        //
        return false;
    }

    deleteByMessageId(messageId) {
        //
        return false;
    }

    deleteByMessageUser(messageId, userId) {
        //
        return false;
    }

    all() {
        let messageLikes = [];
        //
        return messageLikes;
    }

    getByMessageId(messageId) {
        let messageLikes = [];
        //
        return messageLikes;
    }

    getByUserId(userId) {
        let messageLikes = [];
        //
        return messageLikes;
    }

    getByMessageUser(messageId, userId) {
        let messageLike = null;
        //
        return messageLike;
    }

}