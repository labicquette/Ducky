export class Post {

    constructor(id,
                user_id,
                reply_to_id,
                time,
                text,
                ) {

        this.id = id;
        this.user_id = user_id;
        this.user = null;
        this.reply_to_id = reply_to_id;
        this.reply_to = null;
        this.time = time;
        this.text = text;
        this.location = null;

        // Status
        this.private = false;
        this.deleted = false;
        this.banished = false;
        this.ban_reason = null;
            
        // Content
        this.polls = [];
        this.media = [];
        this.hashtags = [];
        this.mentionned_users_ids = [];
        this.mentionned_users = [];

        // Interactions
        this.likes   = [];
        this.views   = [];
        this.shares  = [];
        this.reports = [];
        this.replies = [];
    }

    static fromJSON(postObject) {
        let post = new Post();
        for (let att in postObject) {
            post[att] = postObject[att];
        }
        return post;
    }
}