import React from "react";

export class FeedContentMessages extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='feed-content-item feed-content-messages'>
                <div className='feed-content-item-left'>
                    <div className='feed-content-item-left-top'>
                        <h2>Messages</h2>
                    </div>
                    <div className='feed-content-item-left-main'>
                    </div>
                </div>
                <div className='feed-content-item-right'>
                </div>
            </div>
        );
    }
}