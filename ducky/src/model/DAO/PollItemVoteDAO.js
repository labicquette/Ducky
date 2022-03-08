import { PollItemVote } from "../objects/polls/PollItemVote";

export class PollItemVoteDAO {

    constructor(connection) {
        this.connection = connection;
    }

    create(pollItemVote) {
        //
        return false;
    }

    update(pollItemVote) {
        //
        return false;
    }

    delete(pollItemVote) {
        //
        return false;
    }

    all() {
        let pollItemVotes = [];
        //
        return pollItemVotes;
    }

    getByPollId(pollId) {
        let pollItemVotes = [];
        //
        return pollItemVotes;       
    }

    getByPollPollItem(pollId, pollItemId) {
        let pollItemVotes = [];
        //
        return pollItemVotes;
    }

    getByPollPollItemUser(pollId, pollItemId, userId) {
        let pollItemVote = null;
        //
        return pollItemVote;
    }

    getByPollUser(pollId, userId) {
        let pollItemVote = null;
        //
        return pollItemVote;
    }

    getByUserId(userId) {
        let pollItemVotes = [];
        //
        return pollItemVotes;
    }

}