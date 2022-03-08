import { PostManager } from "./PostManager";

/**
 * post view manager
 */
export class PostView extends PostManager {

    constructor(postId, userId, time) {
        super(postId, userId, time);
    }
}