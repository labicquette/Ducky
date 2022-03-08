import { Poll } from "../objects/polls/Poll";
import { PollItem } from "../objects/polls/PollItem";
import { PollItemVote } from "../objects/polls/PollItemVote";
import { PollItemDAO } from "./PollItemDAO";
import { PollItemVoteDAO } from "./PollItemVoteDAO";

export class PollDAO {

    constructor(connection) {
        this.connection = connection;
    }

    /**
     * create poll
     * @param {Poll} poll 
     * @returns {boolean}
     */
    create(poll) {
        //
        return false;
    }

    /**
     * update poll
     * @param {Poll} poll 
     * @returns {boolean}
     */
    update(poll) {
        //
        return false;
    }

    /**
     * delete poll
     * set the poll status to deleted
     * @param {Poll} poll 
     * @returns {boolean}
     */
    delete(poll) {
        //
        return false;
    }

    /**
     * @returns all poll
     */
    all() {
        let polls = [];
        //
        return polls;
    }

    /**
     * @param {int} pollId 
     * @returns poll by id
     */
    getById(pollId) {
        let poll = null;
        //
        return poll;
    }

    /**
     * @param {string} title 
     * @returns list of polls with the same title
     */
    getByTitle(title) {
        let polls = [];
        //
        return polls;
    }

    /**
     * @param {string} title 
     * @returns list of polls whose title contains the text
     */
    getByTitleContent(text) {
        let polls = [];
        //
        return polls;
    }

    /**
     * @param {int} userId 
     * @returns list of polls posted by a user
     */
    getByUser(userId) {
        let polls = [];
        //
        return polls;
    }

    /**
     * @param {int} userId 
     * @returns list of polls in which the user has participated
     */
    getByVoterUser(userId) {
        let polls = [];
        //
        return polls;
    }   

    /**
     * @returns list of open polls
     */
    getOpenPolls() {
        let polls = [];
        //
        return polls;       
    }

    /**
     * @return list of closed polls
     */
    getClosedPools() {
        let polls = [];
        //
        return polls;   
    }

    /**
     * @param {int} pollId 
     * @returns list of poll items
     */
    getItems(pollId) {
        let pollItems = [];
        //
        return pollItems;
    }

    /**
     * @param {int} pollId 
     * @returns list of poll item votes
     */
    getVoters(pollId) {
        let pollItemVotes = [];
        //
        return pollItemVotes;
    }
}