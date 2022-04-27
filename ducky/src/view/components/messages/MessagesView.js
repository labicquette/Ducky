import React from "react";
import { MessageView } from "./MessageView";

export class MessagesView extends React.Component {

    render() {
        return (
            <div className='messages-view-container'>
                <div className='messages-view-header'>
                    <img
                        src={this.props.messages.image} 
                        className='messages-view-header-image'
                        alt={this.props.messages.title} />
                    <span className='message-view-header-title'>
                        {this.props.messages.title}
                    </span>
                </div>
                <div className='messages-view-content'>
                    {
                        this.props.messages.messages.map(
                            message => <MessageView message={message} />
                        )
                    }
                </div>
            </div>
        );
    }
}