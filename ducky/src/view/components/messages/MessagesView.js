import React from "react";

export class MessagesView extends React.Component {

    render() {
        return (
            <div className='messages-view-container'>
                <div className='messages-view-header'>
                    <img
                        src={this.props.messages.image} 
                        className='messages-view-header-image'/>
                    <span className='message-view-header-title'>
                        {this.props.messages.title}
                    </span>
                </div>
                <div className='messages-view-content'>
                    
                </div>
            </div>
        );
    }
}