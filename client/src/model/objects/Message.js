export class Message {

    constructor(id,
                user_id,
                reply_to_id,
                time,
                text
                ) {

        this.id = id;
        this.user_id = user_id;
        this.user = null;
        this.reply_to_id = reply_to_id;
        this.reply_to = null;
        this.time = time;
        this.text = text;

        // Status
        this.deleted = false;

        // Content
        this.polls = [];
        this.media = [];
        this.hashtags = [];
        this.links = [];
        this.mentionned_users_ids = [];
        this.mentionned_users = [];

        // Interactions
        this.likes = [];
        this.views = [];
        this.receptions = [];
        this.distributions = [];
    }
}
