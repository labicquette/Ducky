import { PollItem } from "./PollItem";

/**
 * Poll status
 * public, private or deleted
 */
export const PollStatus = {
    public: 'public',
    private: 'private',
    deleted: 'deleted'
}

/**
 * Poll time status
 * Open or closed
 */
export const PollTimeStatus = {
    open: 'open',
    closed: 'closed'
}

export class Poll {

    /**
     * Poll
     * @param {int} id 
     * @param {int} userId user author id
     * @param {string} title poll title
     * @param {Date} time creation time
     * @param {Date} closeTime end time
     * @param {string} status poll status
     */
    constructor(id,
                userId,
                title,
                creationTime,
                closingTime,
                pollStatus,
                pollTimeStatus) {
        
        this.id = id;
        this.userId = userId;
        this.title = title;
        this.creationTime = creationTime;
        this.closingTime = closingTime;
        this.pollStatus = pollStatus;
        this.pollTimeStatus = pollTimeStatus;

        this.items = []; // list of poll items
        this.voters = []; // all voters
    }

    get votersCount() {
        return this.voters.length;
    }

    get itemsCount() {
        return this.items.length;
    }

    addItem(pollItem) {
        this.items.push(pollItem);
    }

    addVoter(userId) {
        this.voters.push(userId);
    }

    updateProporitionsItems() {
        for (let pollItem of this.items) {
            if (this.voters.length == 0)
                pollItem.proportion = 0.0;
            else
                pollItem.proportion = pollItem.voters.length / this.voters.length;
        }
    }
}
