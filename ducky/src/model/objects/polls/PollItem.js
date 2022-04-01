export class PollItem {

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
        this.selected = false; // set true if selected by current user
    }

    addVoter(userId) {
        this.voters.push(userId);
    }

}