import { PostManager } from "./PostManager";

export class PostReport extends PostManager {

    constructor(postId, userId, time, reason) {
        super(postId, userId, time);
        this.reason = reason;
    }
}