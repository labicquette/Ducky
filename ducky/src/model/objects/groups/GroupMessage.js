import { MessageBase, MessageType } from "../messages/MessageBase";

export class GroupMessage extends MessageBase {

    constructor(id,
                byUser,
                toGroup,
                replyTo,
                time,
                text,
                status
                ) {

        super(id,
            byUser,
            MessageType.group,
            replyTo,
            time,
            text,
            status
        );
        this.toGroup = toGroup;

        // Group message interaction
        this.likes = [];
        this.views = [];
        this.receptions = [];
        this.distributions = []; 
    }

    addLike(groupMessageLike) {
        this.likes.push(groupMessageLike);
    }

    addView(groupMessageView) {
        this.views.push(groupMessageView);
    }

    addReception(groupMessageReception) {
        this.receptions.push(groupMessageReception);
    }

    addDistribution(groupMessageDistribution) {
        this.distributions.push(groupMessageDistribution);
    }
}
