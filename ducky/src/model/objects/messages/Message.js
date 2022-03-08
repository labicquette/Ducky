import { MessageBase, MessageType } from "./MessageBase";

export class Message extends MessageBase {

    constructor(id,
                byUserId,
                toUserId,
                replyToId,
                time,
                text,
                status,
                viewStatus
                ) {

        super(id,
            byUserId,
            MessageType.simple,
            replyToId,
            time,
            text,
            status
        );
        this.toUserId = toUserId;
        this.viewStatus = viewStatus;
    }
}
