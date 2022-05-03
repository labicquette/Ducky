import React from "react";
import { formatISODateTime } from "../../../model/utils";

export class MessageView extends React.Component {

    render() {
        let messageAuthorContent = null;
        messageAuthorContent = (
            <div className='message-view-author-content'>
                <span>{this.props.message.user.names}</span>
            </div>
        );

        let messageReplyContent = null;
        if (this.props.message.reply_to) {
            messageReplyContent = (
                <div className='message-view-reply-container'>

                </div>
            );
        } 
       
        let messagePollContent = null;
        if (this.props.message.polls.length > 0) {
            messagePollContent = (
                <div className='message-view-polls-container'>

                </div>
            );
        }
       
        let messageMediaContent = null;
        if (this.props.message.media.length > 0) {
            messageMediaContent = (
                <div className='message-view-media-container'>

                </div>
            );
        }
       
        let messageTextContent = null;
        if (this.props.message.text) {
            messageTextContent = (
                <div className='message-view-text-container'>
                    {this.props.message.text}
                </div>
            );
        }

        let messageInfosContent = (
            <div className='message-view-info-container'>
                <div className='message-view-info-time'>
                    {formatISODateTime(new Date(this.props.message.time))}
                </div>
            </div>
        );

        let cssClassName = 'message-view-other-content';
        if (this.props.me) {
            cssClassName = 'message-view-me-content';
        }
       
        return (
            <div className='message-view-container'>
                <div className={cssClassName}>
                    {messageAuthorContent}
                    {messageReplyContent}
                    {messagePollContent}
                    {messageMediaContent}
                    {messageTextContent}
                    {messageInfosContent}
                </div>
            </div>
        );
    }
}