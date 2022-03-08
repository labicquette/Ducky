export class PollItem {

    /**
     * Poll item
     * @param {int} id 
     * @param {int} pollId 
     * @param {int} text 
     * @param {float} proportion
     */
    constructor(id,
                pollId,
                text,
                proportion
                ) {
                    
        this.id = id;
        this.pollId = pollId;
        this.text = text;
        this.proportion = proportion;

        this.voters = [];
    }

    addVoter(userId) {
        this.voters.push(userId);
    }

}