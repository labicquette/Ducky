export const MessagesStatus = {
    write: 'Ecrit...',
    newMessage: 'Nouveau message',
    received: 'Réçu',
    open: 'Ouvert',
    send: 'Remis'
}

export class Messages {

    constructor(id,
                image,
                title,
                time,
                status) {
        
        this.id = id;
        this.image = image;
        this.title = title;
        this.time = time;
        this.status = status;
        this.messages = [];
    }

    addMessage(message) {
        this.messages.push(message);
    }
}