import React from "react";

export class MessageEdit extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            messageButtonFlag: false,
        };
    }

    render() {
        return (
            <div className='message-edit-container'>
                <div className='message-edit-text-content'>
                    <textarea className='message-edit-text'/>
                </div>
                <div className='message-edit-actions-bar'>
                    <div className='message-edit-actions-icons'>
                        <div className='message-edit-action-icon'>
                            <input
                                className='message-edit-action-icon-file'
                                id='message-edit-action-icon-file-image'
                                type='file'
                                accept='images'
                             />
                            <input
                                className='message-edit-action-icon-image'
                                type='image'
                                alt='Image'
                                title='Image'
                                src={require('../../../ressources/icons/image.png')}
                                onClick={(e) => {
                                    e.preventDefault();
                                    let input = document.getElementById('message-edit-action-icon-file-image');
                                    input.click();
                                }} />
                        </div>
                        <div className='message-edit-action-icon'>
                            <input
                                className='message-edit-action-icon-image'
                                type='image'
                                alt='Vidéo'
                                title='Vidéo'
                                src={require('../../../ressources/icons/video.png')}
                                onClick={this.props.onClick} />
                        </div>
                        <div className='message-edit-action-icon'>
                            <input
                                className='message-edit-action-icon-image'
                                type='image'
                                alt='Audio'
                                title='Audio'
                                src={require('../../../ressources/icons/audio.png')}
                                onClick={this.props.onClick} />
                        </div>
                        <div className='message-edit-action-icon'>
                            <input
                                className='message-edit-action-icon-image'
                                type='image'
                                alt='Localisation'
                                title='Localisation'
                                src={require('../../../ressources/icons/location.png')}
                                onClick={this.props.onClick} />
                        </div>
                        <div className='message-edit-action-icon'>
                            <input
                                className='message-edit-action-icon-image'
                                type='image'
                                alt='Sondage'
                                title='Sondage'
                                src={require('../../../ressources/icons/poll.png')}
                                onClick={(e) => {
                                    e.preventDefault();
                                    this.setState({ pollFlag: true });
                                }} />
                        </div>
                        <div className='message-edit-action-icon'>
                            <input
                                className='message-edit-action-icon-image'
                                type='image'
                                alt='Audience'
                                title='Audience'
                                src={require('../../../ressources/icons/audience.png')}
                                onClick={this.props.onClick} />
                        </div>
                    </div>
                    <div className='message-edit-actions-text'>
                        <div className='message-edit-action-text'>
                            <input
                                className={
                                    'message-edit-action-text-button ' +
                                    'message-edit-action-text-button-' + this.state.messageButtonFlag
                                }
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