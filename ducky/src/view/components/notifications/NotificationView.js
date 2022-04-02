import React from "react";

export class NotificationView extends React.Component {

    render() {
        return (
            <div className='notification-view-container'>
                <img
                    src={require('../../../ressources/profil_test.png')}
                    className='notification-view-image' />
                <div className='notification-view-content'>
                    <div>
                        Ben Kabongo a aimé votre nouvelle photo
                    </div>
                </div>
            </div>
        );
    }
}