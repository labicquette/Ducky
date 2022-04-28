import React from "react";
import { MessagesPreviewList } from "../messages/MessagesPreviewList";
import { MessagesView } from "../messages/MessagesView";

export class FeedContentMessages extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            messages: null,
        };
    }

    setMessages(messages) {
        this.setState({messages: messages});
    }

    render() {
        let messagesContent = null;
        if (this.state.messages) {
            messagesContent = (
                <MessagesView 
                    user={this.props.user}
                    messages={this.state.messages} />
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
                        <MessagesPreviewList 
                            handleSelect={(messages) => this.setMessages(messages)}
                            messagesList={this.props.messagesList} />
                    </div>
                    <div className='feed-content-messages-right'>
                        {messagesContent}
                    </div>
                </div>
            </div>
        );
    }
}