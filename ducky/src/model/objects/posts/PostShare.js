import { PostManager } from "./PostManager";

/**
 * post share manager
 */
export class PostShare extends PostManager {

    constructor(postId, userId, time) {
        super(postId, userId, time);
    }
}