export class Storie {

    constructor(id,
                user_id,
                text,
                time,
                ) {
  
        this.id = id;
        this.user_id = user_id;
        this.text = text;
        this.time = time;
        
        // Status
        this.private = false;
        this.deleted = false;
        this.storie_group_id = null;

        // Content
        this.polls = [];
        this.media = [];
        this.hashtag = [];
        this.links = [];
        this.mentionned_users_ids = [];

        // Interactions
        this.likes = [];
        this.views = [];
        this.reports = [];
    }
}