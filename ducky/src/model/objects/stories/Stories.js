export class Stories {

    constructor(id,
                image,
                title,
                time,
                viewStatus,
                maskStatus) {
                    
        this.id = id;
        this.image = image;
        this.title = title;
        this.time = time;
        this.viewStatus = viewStatus; // true or false
        this.maskStatus = maskStatus; // true or false
        this.currentStorieId = 0;
        this.stories = []
    }

    addStorie(storie) {
        this.stories.push(storie);
    }
}