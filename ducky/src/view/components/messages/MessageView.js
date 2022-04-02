import React from "react";
import { MessageType } from "../../../model/objects/messages/MessageBase";

export class MessageView extends React.Component {

    render() {
        let messageHeaderContent = null;
        /*
        if (this.props.message.type == MessageType.group) {
            messageHeaderContent = (
                <div className='message-view-header'>
                    
                </div>
            );
        }
        */
       let messageReplyContent = null;
       let messageTextContent = null;
       let messagePollContent = null;
       let messageMediaContent = null;
       
        return (
            <div className='message-view-container'>
                {messageHeaderContent}
                <div className='message-view-content'>
                    {messageReplyContent}
                    {messageTextContent}
                    {messagePollContent}
                    {messageMediaContent}
                </div>
            </div>
        );
    }
}