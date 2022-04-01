import { PostManager } from "./PostManager";

export class PostShare extends PostManager {

    constructor(postId, userId, time) {
        super(postId, userId, time);
    }
}