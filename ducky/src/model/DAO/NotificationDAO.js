import { Notification } from "../objects/notifications/Notification";

export class NotificationDAO {

    constructor(connection) {
        this.connection = connection;
    }

    create(notification) {
        //
        return false;
    }

    update(notification) {
        //
        return false;
    }

    delete(notification) {
        //
        return false;
    }

    deleteById(notificationId) {
        //
        return false;
    }

    all() {
        let notifications = [];
        //
        return notifications;
    }

    getById(notificationId) {
        let notification = null;
        //
        return notification;
    }

    getByUserId(userId) {
        let notifications = [];
        //
        return notifications;
    }

    setStatus(notificationId, status) {
        //
        return false;
    }   

}