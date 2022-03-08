import { MessageViewStatus } from "../messages/MessageBase";

export class GroupMessageViewStatus {

    constructor(groupMessageId, userId, time, viewStatus) {
        this.groupMessageId = groupMessageId;
        this.userId = userId;
        this.time = time;
        this.viewStatus = viewStatus;
    }
}