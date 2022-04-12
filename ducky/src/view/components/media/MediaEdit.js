import React from "react";
import { MediaEditItem } from "./MediaEditItem";

export class MediaEdit extends React.Component {

    render() {
        let itemsContent = [];
        for (let i = 0; i < this.props.media.length; i++) {
            let media = this.props.media[i];
            if (!media) continue;
            itemsContent.push(
                <MediaEditItem 
                    media={media}
                    handleDelete={() => this.props.handleDelete(i)}
                    handleChange={(e) => this.props.handleChange(e, i)} />
            )
        }

        return (
            <div className='media-edit-container'>
                {itemsContent}
            </div>
        );
    }
}