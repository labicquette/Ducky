import React from "react";
import { NotificationView } from "./NotificationView";

export class NotificationListView extends React.Component {

    render() {
        let notificationsContent = null;
        if (this.props.notifications.length === 0) {
            notificationsContent = (
                <span className='notification-list-view-content'>
                    Aucune notification
                </span>);
        } else {
            notificationsContent = (
                <div className='notification-list-view-content'>
                    {
                        this.props.notifications.map(
                            notification => (
                                <NotificationView 
                                    key={notification.id}
                                    notification={notification} />
                            )
                        )
                    }
                </div>
            );
        }


        return (
            <div className='notification-list-view-container'>
                <div className='notification-list-view-header'>
                    <h3>Notifications</h3>
                </div>
                {notificationsContent}
            </div>
        );
    }
}