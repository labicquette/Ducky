import { UserManager } from "./UserManager";

export class UserBlock extends UserManager{

    constructor(userId, blockedId, time, reason) {
        super(userId, blockedId, time);
        this.reason = reason;
    }
}