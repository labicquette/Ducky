import { StorieManager } from "./StorieManager";

export class StorieReport extends StorieManager {
    constructor(storieId, userId, time, reason) {
        super(storieId, userId, time);
        this.reason = reason;
    }
}