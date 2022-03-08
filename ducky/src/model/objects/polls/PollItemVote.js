export class PollItemVote {

    constructor(pollId, pollItemId, userId, time) {
        this.pollId = pollId;
        this.pollItemId = pollItemId;
        this.userId = userId;
        this.time = time;
    }
}