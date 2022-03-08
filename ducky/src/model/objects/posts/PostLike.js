import { PostManager } from "./PostManager";

/**
 * post like manager
 */
export class PostLike extends PostManager {

    constructor(postId, userId, time) {
        super(postId, userId, time);
    }
}