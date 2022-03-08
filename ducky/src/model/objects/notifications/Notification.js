export const NotificationType = {
    //TODO:
};

export const NotificationStatus = {
    clicked: 'cliked',
    deleted: 'deleted',
    received: 'received',
    seen: 'seen'
};

export class Notification {

    constructor(id,
                userId,
                title,
                description,
                type,
                time,
                image,
                link,
                status
                ) {
        
        this.id = id;
        this.userId = userId;
        this.title = title;
        this.description = description;
        this.type = type;
        this.time = time;
        this.image = image;
        this.link = link;
        this.status = status;
    } 
}