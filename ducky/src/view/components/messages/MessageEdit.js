import React from "react";

export class MessageEdit extends React.Component {

    render() {
        return (
            <div className='message-edit-container'>
                <div className='message-edit-text-content'>
                    <textarea className='message-edit-text'/>
                </div>
                <div className='message-edit-actions-bar'>

                </div>
            </div>
        );
    }
}