export const MessagesStatus = {
    write: 'Ecrit...',
    newMessage: 'Nouveau message',
    received: 'Réçu',
    open: 'Ouvert',
    send: 'Remis'
}

export const MessageType = {
    simple: 'simple',
    group: 'group',
};

export class Messages {

    constructor(id,
                image,
                type,
                title,
                time,
                status) {
        
        this.id = id;
        this.image = image;
        this.type = type;
        this.title = title;
        this.time = time;
        this.status = status;
        this.other_user_id = null;
        this.group_id = null;
        this.messages = [];
    }
}