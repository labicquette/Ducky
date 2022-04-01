import { PostManager } from "./PostManager";

export class PostView extends PostManager {

    constructor(postId, userId, time) {
        super(postId, userId, time);
    }
}