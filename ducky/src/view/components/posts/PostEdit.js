import React from "react";

export class PostEdit extends React.Component {

    render() {
        return (
            <div className='post-edit-container'>
                <div className='post-edit-text-container'>
                    <textarea 
                        className='post-edit-text'
                        rows={5}
                        cols={40}
                        wrap='hard'
                        placeholder='Quoi de neuf ?'
                        
                        >
                    </textarea>
                </div>
                <div className='post-edit-actions-bar'>
                    <div className='post-edit-actions-icons'>
                        <div className='post-edit-action-icon'>
                            <input 
                                className='post-edit-action-icon-iamge'
                                type='image'
                                alt='Image'
                                title='Image'
                                src={require('../../../ressources/icons/image.png')}
                                onClick={this.props.onClick} />
                        </div>
                        <div className='post-edit-action-icon'>
                            <input 
                                className='post-edit-action-icon-iamge'
                                type='image'
                                alt='Vidéo'
                                title='Vidéo'
                                src={require('../../../ressources/icons/video.png')}
                                onClick={this.props.onClick} />
                        </div>
                        <div className='post-edit-action-icon'>
                            <input 
                                className='post-edit-action-icon-iamge'
                                type='image'
                                alt='Audio'
                                title='Audio'
                                src={require('../../../ressources/icons/audio.png')}
                                onClick={this.props.onClick} />
                        </div>
                        <div className='post-edit-action-icon'>
                            <input 
                                className='post-edit-action-icon-iamge'
                                type='image'
                                alt='Localisation'
                                title='Localisation'
                                src={require('../../../ressources/icons/location.png')}
                                onClick={this.props.onClick} />
                        </div>
                        <div className='post-edit-action-icon'>
                            <input 
                                className='post-edit-action-icon-iamge'
                                type='image'
                                alt='Sondage'
                                title='Sondage'
                                src={require('../../../ressources/icons/poll.png')}
                                onClick={this.props.onClick} />
                        </div>
                        <div className='post-edit-action-icon'>
                            <input 
                                className='post-edit-action-icon-iamge'
                                type='image'
                                alt='Audience'
                                title='Audience'
                                src={require('../../../ressources/icons/audience.png')}
                                onClick={this.props.onClick} />
                        </div>
                    </div>
                    <div className='post-edit-actions-text'>
                        <div className='post-edit-action-text'>
                            <input 
                                className='post-edit-action-text-button'
                                type='button'
                                value='Publier'
                                onClick={this.props.onClick} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}