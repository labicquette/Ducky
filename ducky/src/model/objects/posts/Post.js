/**
 * post status
 * public, private, banished, deleted
 */
export const PostStatus = {
    public: 'public',
    private: 'private',
    banished: 'banished',
    deleted: 'deleted'
};

export class Post {

    /**
     * Post
     * @param {int} id 
     * @param {int} userId 
     * @param {int} replyToId 
     * @param {Date} time 
     * @param {string} text 
     * @param {string} status 
     */
    constructor(id,
                userId,
                replyToId,
                time,
                text,
                status
                ) {

        this.id = id;
        this.userId = userId;
        this.replyToId = replyToId;
        this.time = time;
        this.text = text;

        // Post status
        this.status = status;
        this.banInformations = null; // specified if the post is banned
            
        // Post content
        this.poll = null; // specified if the post contains poll
        this.media = []; // media
        this.hashtags = []; // post hashtags
        this.mentionnedUsers = []; // mentionned users

        // Post interaction
        this.likes   = []; // likes
        this.views   = []; // views
        this.shares  = []; // shares
        this.reports = []; // reports
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

    get likesCount() {
        return this.likes.length;
    }

    get viewsCount() {
        return this.views.length;
    }

    get sharesCount() {
        return this.shares.length;
    }

    get reportsCount() {
        return this.reports.length;
    }

    addLike(postLike) {
        this.likes.push(postLike);
    }

    addView(postView) {
        this.views.push(postView);
    }

    addShare(postShare) {
        this.shares.push(postShare);
    }

    addReport(postReport) {
        this.reports.push(postReport);
    }

    setBanInformations(postBan) {
        this.banInformations = postBan;
    }
    
}