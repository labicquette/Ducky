import React from "react";
import { MessagesStatus } from "../../../model/objects/Messages";
import { dateDifference } from "../../../model/utils";

export class MessagesPreview extends React.Component {

    render() {
        //let timeDiff = dateDifference(new Date(this.props.messages.time));
        let timeDiff = this.props.messages.time;

        let messagesStatusImageSrc = null;
        switch (this.props.messages.status) {
            case (MessagesStatus.newMessage):
                messagesStatusImageSrc = require('../../../ressources/icons/message_new.png');
                break;
            case (MessagesStatus.received):
                messagesStatusImageSrc = require('../../../ressources/icons/message_open.png');
                break;
            case (MessagesStatus.open):
                messagesStatusImageSrc = require('../../../ressources/icons/view.png');
                break;
            case (MessagesStatus.write):
                messagesStatusImageSrc = require('../../../ressources/icons/write.png');
                break;
            case (MessagesStatus.send):
                messagesStatusImageSrc = require('../../../ressources/icons/post.png');
                break;
            default:
                messagesStatusImageSrc = null;
        }

        return (
            <div className='messages-preview-container'>
                <div className='messages-preview-image-container'>
                    <img
                        src={this.props.messages.image}
                        alt={this.props.messages.title}
                        className='messages-preview-image' />
                </div>
                <div className='messages-preview-infos'>
                    <div className='messages-preview-infos-title'>
                        <span>{this.props.messages.title}</span>
                    </div>
                    <div className='messages-preview-infos-status'>
                        <img
                            src={messagesStatusImageSrc}
                            alt='Message status'
                            className='messages-preview-infos-status-image' />
                        <span>{this.props.messages.status}</span>
                        <span>{' · ' + this.props.messages.time}</span>
                    </div>
                </div>
            </div>
        );
    }
}