import React from "react";

export class NotificationView extends React.Component {

    render() {
        return (
            <div className='notification-view-container'>
                <img
                    src={this.props.notification.image}
                    className='notification-view-image'
                    alt='Notification' />
                <div className='notification-view-content'>
                    <span className='notification-view-title' >
                        {this.props.notification.title}
                    </span>
                    <span className='notification-view-description'>
                        {this.props.notification.description}
                    </span>
                </div>
            </div>
        );
    }
}