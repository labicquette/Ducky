export const MessageType = {
    simple: 'simple',
    group: 'group',
};

export const MessageStatus = {
    sent: 'sent',
    notSent: 'no sent',
    deleted: 'deleted'
};

export const MessageViewStatus = {
    received: 'received',
    distributed: 'distributed',
    seen: 'seen'
};

export class MessageBase {

    /**
     * message class base
     * @param {int} id 
     * @param {int} byUserId 
     * @param {string} type simple or group message
     * @param {int} replyToId 
     * @param {Date} time 
     * @param {string} text 
     * @param {string} status 
     */
    constructor(id,
                byUserId,
                type,
                replyToId,
                time,
                text,
                status
                ) {

        this.id = id;
        this.byUserId = byUserId;
        this.type = type,
        this.replyToId = replyToId;
        this.time = time;
        this.text = text;
        this.status = status;

        // Message content
        this.poll = null; // specified if the message contains poll
        this.media = []; // post media
        this.hashtags = []; // post hashtags
        this.mentionnedUsers = []; // mentionned users

        // Message interactions
        this.likes = [];
    }

    get likesCount() {
        return this.likes.length;
    }

    addMedia(media) {
        this.media.push(media);
    }

    addHashtag(hashtag) {
        this.hashtags.push(hashtag);
    }

    addMentionnedUser(userId) {
        this.mentionnedUsers.push(userId);
    }
}
