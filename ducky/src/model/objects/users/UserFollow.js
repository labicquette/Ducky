import { UserManager } from "./UserManager";

export class UserFollow extends UserManager {

    constructor(userId, followedId, time) {
        super(userId, followedId, time);
    }
}