import React from "react";
import { dateDifference } from "../../../model/utils";

export class StoriePreview2 extends React.Component {

    render() {
        let timeDiff = dateDifference(this.props.stories.time);
        let counter = this.props.stories.stories.length - this.props.stories.currentStorieId - 1;
        let statusContent = (
            (counter > 0) ? 
            <span>{counter + ' nouvelles stories'}</span> : null
        );

        return (
            <div className='stories-preview2-container'>
                <div className='stories-preview2-image-container'>
                    <img
                        src={this.props.stories.image}
                        className='stories-preview2-image'
                        alt={this.props.stories.title} />
                </div>
                <div className='stories-preview2-infos'>
                    <div className='stories-preview2-infos-title'>
                        <span>{this.props.stories.title}</span>
                    </div>
                    <div className='stories-preview2-infos-status'>
                        {statusContent}
                        <span>{' · ' + timeDiff.diff +timeDiff.timeUnit}</span>
                    </div>
                </div>
            </div>
        );
    }
}