export class PollItemVote {

    constructor(user_id, time) {
        this.user_id = user_id;
        this.time = time;
    }
}

export class PollItem {

    constructor(id,
                text,
                proportion
                ) {
                    
        this.id = id;
        this.text = text;
        this.proportion = proportion;
        this.votes = [];
    }

    addVote(vote) {
        this.votes.push(vote);
    }
}

export class Poll {

    constructor(id,
                title,
                creation_time,
                closing_time,
                closed,
                deleted) {
        
        this.id = id;
        this.title = title;
        this.creation_time = creation_time;
        this.closing_time = closing_time;
        this.closed = closed;
        this.deleted = deleted;
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    updateProporitionsItems() {
        let votes_count = 0;
        for (let item of this.items)
            votes_count += item.votes.length;

        if (votes_count > 0) {
            for (let item of this.items)
                item.proportion = item.votes.length / votes_count;
        }
    }
}
