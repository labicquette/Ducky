import { MessageBase, MessageType } from "./MessageBase";

export class Message extends MessageBase {

    constructor(id,
                byUser,
                toUser,
                replyTo,
                time,
                text,
                status,
                viewStatus
                ) {

        super(id,
            byUser,
            MessageType.simple,
            replyTo,
            time,
            text,
            status
        );
        this.toUser = toUser;
        this.viewStatus = viewStatus;
    }
}
