export class UserBan {

    constructor(userId, time, endTime, reason) {
        this.userId = userId;
        this.time = time;
        this.endTime = time;
        this.reason = reason;
    }
}