import { UserManager } from "./UserManager";

export class UserView extends UserManager{

    constructor(userId, viewedId, time) {
        super(userId, viewedId, time);
    }
}