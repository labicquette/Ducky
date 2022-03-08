import { GroupMessageViewStatus } from "../objects/groups/GroupMessageViewStatus";
import { MessageViewStatus } from "../objects/messages/MessageBase";

export class GroupMessageViewStatusDAO {

    constructor(connection) {
        this.connection = connection;
    }

    create(groupMessageViewStatus) {
        //
        return false;
    }

    update(groupMessageViewStatus) {
        //
        return false;
    }

    delete(groupMessageViewStatus) {
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
        let groupMessageViewStatuss = [];
        //
        return groupMessageViewStatuss;
    }

    getByGroupMessageId(groupMessageId) {
        let groupMessageViewStatuss = [];
        //
        return groupMessageViewStatuss;
    }

    getByUserId(userId) {
        let groupMessageViewStatuss = [];
        //
        return groupMessageViewStatuss;
    }

    getByGroupMessageUser(groupMessageId, userId) {
        let groupMessageViewStatus = null;
        //
        return groupMessageViewStatus;
    }

    getByGroupMessageStatus(groupMessageId, viewStatus) {
        let groupMessageViewStatus = null;
        //
        return groupMessageViewStatus;
    }
}