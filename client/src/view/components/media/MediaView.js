import React from "react";
import { MediaType } from "../../../model/objects/Media";

export class MediaView extends React.Component {

    render() {
        let content = null;
        switch (this.props.media.type) {
            case MediaType.image:
                content = (
                    <img
                        className='media-view-content media-view-image'
                        src={this.props.media.src}
                        alt={this.props.media.description}
                        title={this.props.media.description} />
                );
                break;
            case MediaType.audio:
                content = (
                    <audio
                        className='media-view-content media-view-audio'
                        src={this.props.media.src}
                        controls />
                );
                break;
            case MediaType.video:
                content = (
                    <video
                        className='media-view-content media-view-video'
                        src={this.props.media.src}
                        controls />
                );
                break;
            default:
                break;
        }
        
        
        return (
            <div className='media-view-container'>
                {content}
            </div>
        );
    }
}