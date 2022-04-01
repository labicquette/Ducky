export const PostStatus = {
    public: 'public',
    private: 'private',
    banished: 'banished',
    deleted: 'deleted'
};

export class Post {

    constructor(id,
                user,
                replyTo,
                time,
                text,
                location,
                status,
                postPrologue
                ) {

        this.id = id;
        this.user = user;
        this.replyTo = replyTo;
        this.time = time;
        this.text = text;
        this.location = location;

        // Post prologue info
        this.postPrologue = postPrologue;   // e.g: @benkabongo25 a commenté

        // Post status
        this.status = status;
        this.banInformations = null; // specified if the post is banned
            
        // Post content
        this.poll = null;           // specified if the post contains poll
        this.media = [];            // media
        this.hashtags = [];         // post hashtags
        this.mentionnedUsers = [];  // mentionned users

        // Post interaction
        this.likes   = []; // likes
        this.views   = []; // views
        this.shares  = []; // shares
        this.reports = []; // reports

        // Post replies
        this.replies = [];
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

    addReply(post) {
        this.replies.push(post);
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
 
    setPostPrologue(postPrologue) {
        this.postPrologue = postPrologue;
    }
}