import React from "react";
import { NotificationView } from "./NotificationView";

export class NotificationListView extends React.Component {

    render() {
        return (
            <div className='notification-list-view-container'>
                <div className='notification-list-view-header'>
                    <h3>Notifications</h3>
                </div>
                <div className='notification-list-view-content'>
                    {
                        this.props.notifications.map(
                            notification => <NotificationView notification={notification} />
                        )
                    }
                </div>
            </div>
        );
    }
}