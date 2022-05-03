import React from "react";
import { MediaType } from "../../../model/objects/Media";

export class MediaEditItem extends React.Component {

    render() {
        let content = null;
        switch (this.props.media.type) {
            case MediaType.image:
                content = (
                    <img
                        className='media-edit-item-content media-edit-item-image'
                        src={this.props.media.src}
                        alt={this.props.media.description} />
                );
                break;

            case MediaType.audio:
                content = (
                    <audio
                        className='media-edit-item-content media-edit-item-audio'
                        src={this.props.media.src}
                        controls />
                );
                break;

            case MediaType.video:
                content = (
                    <video
                        className='media-edit-item-content media-edit-item-video'
                        src={this.props.media.src}
                        controls />
                );
                break;

            case MediaType.document:
                // TODO:
                break;

            default:
                // TODO:
                break;
        }

        return (
            <div className='media-edit-item-container'>
                <div className='media-edit-item-sub-container'>
                    {content}
                    <input
                        className='media-edit-item-delete'
                        type='image'
                        src={require('../../../ressources/icons/close.png')}
                        alt='Supprimer'
                        title='Supprimer'
                        onClick={this.props.handleDelete} />
                </div>
                <div className='media-edit-item-description'>
                    <input
                        className='media-edit-item-description-text'
                        type='text'
                        placeholder='Ajouter une description'
                        value={this.props.media.description}
                        onChange={this.props.handleChange} />
                </div>
            </div>
        );
    }
}