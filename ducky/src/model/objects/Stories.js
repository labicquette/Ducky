export class StorieView {

    constructor(storie, view) {
        this.storie = storie;
        this.view = view;
        this.time = time;
    }
}

export class Stories {

    constructor(id,
                image,
                title,
                time,
                author_id,
                storie_group_id) {
                    
        this.id = id;
        this.image = image;
        this.title = title;
        this.time = time;
        this.author_id = author_id;
        this.storie_group_id = storie_group_id;
        this.mask = false;
        this.stories = []
    }
}