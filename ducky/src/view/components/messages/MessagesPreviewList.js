import React from "react";
import { MessagesPreview } from "./MessagesPreview";

export class MessagesPreviewList extends React.Component {

    render() {
        return (
            <div className='messages-preview-list-container'>
                <div className='messages-preview-list-title'>
                    <h3>Messages</h3>
                </div>
                <div className='messages-preview-list-content'>
                    {
                        this.props.messagesList.map(
                            messages => <MessagesPreview messages={messages} />
                        )
                    }
                </div>
            </div>
        );
    }
}