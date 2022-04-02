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

    constructor(id,
                byUser,
                type,
                replyTo,
                time,
                text,
                status
                ) {

        this.id = id;
        this.byUser = byUser;
        this.type = type,
        this.replyTo = replyTo;
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
