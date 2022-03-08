export const StorieStatus = {
    public: 'public',
    private: 'private',
    deleted: 'deleted'
};

export class Storie {

    constructor(id,
                userId,
                text,
                time,
                status,
                storieGroupId
                ) {
  
        this.id = id;
        this.userId = userId;
        this.text = text;
        this.time = time;
        this.status = status;
        this.storieGroupId = storieGroupId;

        // Stories interactions
        this.likes = [];
        this.views = [];
        this.reports = [];
    }

    get likesCount() {
        return this.likes.length;
    }

    get viewsCount() {
        return this.views.length;
    }

    get reportsCount() {
        return this.reports.length;
    }

    addLike(storieLike) {
        this.likes.push(storieLike);
    }

    addView(storieView) {
        this.views.push(storieView);
    }

    addReport(storieReport) {
        this.reports.push(storieReport);
    }
}