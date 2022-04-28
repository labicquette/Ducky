import React from "react";
import { MessageEdit } from "./MessageEdit";
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
                    <span className='messages-view-header-title'>
                        {this.props.messages.title}
                    </span>
                </div>
                <div className='messages-view-content'>
                    {
                        this.props.messages.messages.map(
                            message => (
                                <MessageView 
                                    key={message.id}
                                    message={message}
                                    me={this.props.user.id === message.user_id} />
                            )
                        )
                    }
                </div>
                <div className='messages-view-edit'>
                    <MessageEdit />
                </div>
            </div>
        );
    }
}