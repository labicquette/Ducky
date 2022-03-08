import { MessageBase, MessageType } from "../messages/MessageBase";

export class GroupMessage extends MessageBase {

    constructor(id,
                byUserId,
                toGroupId,
                replyToId,
                time,
                text,
                status
                ) {

        super(id,
            byUserId,
            MessageType.group,
            replyToId,
            time,
            text,
            status
        );
        this.toGroupId = toGroupId;

        // Group message interaction
        this.likes = [];
        this.views = [];
        this.receptions = [];
        this.distributions = []; 
    }

    get likesCount() {
        return this.likes.length;
    }

    get viewsCount() {
        return this.views.length;
    }

    get receptionsCount() {
        return this.receptions.length;
    }

    get distributionsCount() {
        return this.distributions.length;
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
