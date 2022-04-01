import { PostManager } from "./PostManager";

export class PostLike extends PostManager {

    constructor(postId, userId, time) {
        super(postId, userId, time);
    }
}