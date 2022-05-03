import React from "react";

export class PollItemView extends React.Component {

    render() {
        return (
            <div className='poll-item-view-container'>
                <div className='poll-item-view-text'>
                    {this.props.pollItem}
                </div>
            </div>
        );
    }
}