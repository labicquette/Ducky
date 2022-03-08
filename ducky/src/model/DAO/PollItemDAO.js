import { Poll } from "../objects/polls/Poll";
import { PollItem } from "../objects/polls/PollItem";
import { PollItemVote } from "../objects/polls/PollItemVote";
import { PollItemVoteDAO } from "../DAO/PollItemVoteDAO";

export class PollItemDAO {

    constructor(connection) {
        this.connection = connection;
    }

    create(pollItem) {
        //
        return false;
    }

    update(pollItem) {
        //
        return false;
    }

    delete(pollItem) {
        //
        return false;
    }

    deleteByPollId(pollId) {
        //
        return false;
    }

    all() {
        let pollItems = [];
        //
        return false;
    }

    getByPollId(pollId) {
        let pollItems = [];
        //
        return false;
    }

    getVotes(pollItem) {
        let pollItemVotes = [];
        //
        return pollItemVotes;
    }

}