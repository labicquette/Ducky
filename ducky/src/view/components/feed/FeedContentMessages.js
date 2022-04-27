import React from "react";
import { MessagesPreviewList } from "../messages/MessagesPreviewList";
import { MessagesView } from "../messages/MessagesView";

export class FeedContentMessages extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selected: -1,
        };
    }

    render() {
        let messagesContent = null;
        if (
                this.state.selected > -1 && 
                this.state.selected < this.props.messagesList.length
            ) {
            messagesContent = (
                <MessagesView messages={this.props.messagesList[this.state.selected]} />
            );
        }
        else {
            messagesContent = (
                <div className='feed-content-messages-empty'>
                    <img
                        src={require('../../../ressources/icons/message.png')}
                        alt='Aucun message'
                        className='feed-content-messages-empty-image' />
                    <h3>Vos messages</h3>
                    <span>Commencez un nouvel échange !</span>
                    <input
                        className='feed-content-messages-empty-button'
                        type='button'
                        value='Envoyer un message' />
                </div>
            );
        }
      
        return (
            <div className='feed-content-item feed-content-messages'>
                <div className='feed-content-messages-main'>
                    <div className='feed-content-messages-left'>
                        <MessagesPreviewList messagesList={this.props.messagesList} />
                    </div>
                    <div className='feed-content-messages-right'>
                        {messagesContent}
                    </div>
                </div>
            </div>
        );
    }
}