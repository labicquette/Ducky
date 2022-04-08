export class Post {

    constructor(id,
                user_id,
                reply_to_id,
                time,
                text,
                ) {

        this.id = id;
        this.user_id = user_id;
        this.reply_to_id = reply_to_id;
        this.time = time;
        this.text = text;
        this.location = null;

        // Status
        this.private = false;
        this.deleted = false;
        this.banished = false;
        this.ban_reason = null;
            
        // Content
        this.poll = [];
        this.media = [];
        this.hashtags = [];
        this.mentionned_users_ids = [];

        // Interactions
        this.likes   = [];
        this.views   = [];
        this.shares  = [];
        this.reports = [];
        this.replies = [];
    }
}