export const MediaType = {
    audio: 'Audio',
    document: 'Document',
    image: 'Image',
    video: 'Vdieo'
}

export class Media {

    constructor(id, type, src) {
        this.id = id;
        this.type = type;
        this.src = src;
    }
}