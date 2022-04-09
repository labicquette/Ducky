export const MediaType = {
    audio: 'audio',
    document: 'document',
    image: 'image',
    video: 'video'
}

export class Media {

    constructor(id, type, src) {
        this.id = id;
        this.type = type;
        this.src = src;
    }
}