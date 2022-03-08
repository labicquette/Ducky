import { UserManager } from "./UserManager";

export class UserReport extends UserManager{

    constructor(userId, reportedId, time, reason) {
        super(userId, reportedId, time);
        this.reason = reason;
    }
}