import React from "react";
import { PollEditor } from "../poll/PollEditor";
import { Media, MediaType } from "../../../model/objects/Media";
import { Post } from "../../../model/objects/Post";
import { MediaEdit } from "../media/MediaEdit";
import { PostServices } from "../../../model/services/PostServices";

export class PostEdit extends React.Component {

    constructor(props) {
        super(props);

        let post = new Post();
        post.user_id = this.props.user.id;

        this.state = {
            post: post,
            media: [],
            mediaFlag: false,
            mediaType: '',
            mediaURL: '',
            pollFlag: false,
            postFlag: false,
            postButtonFlag: 'active',
        }
    }

    render() {
        let pollContent = null;
        if (this.state.pollFlag) {
            pollContent = (
                <PollEditor 
                    timer={true} 
                    handleSetPoll={(poll) => {
                        let post = this.state.post;
                        post.polls[0] = poll;
                        this.setState({post: post})
                    }}
                    handleDelete={(e) => {
                        e.preventDefault();
                        this.setState({ pollFlag : false });
                    }}/>
            );  
        }

        let mediaContent = null;
        if (this.state.post.media.length > 0) {
            mediaContent = (
                <MediaEdit
                    media={this.state.post.media}
                    handleDelete={(i) => {
                        let post = this.state.post;
                        post.media.splice(i, 1);
                        this.setState({ post: post });
                    }} 
                    handleChange={(e, i) => {
                        let post = this.state.post;
                        post.media[i].description = e.target.value;
                        this.setState({ post: post });
                    }}/>
            );
        }

        let moreContent = null;
        if (pollContent || mediaContent) {
            moreContent = (
                <div className='post-edit-more-content'>
                    {mediaContent}
                    {pollContent}
                </div>
            );
        }

        let addMediaContent = null;
        if (this.state.mediaFlag) {
            addMediaContent = (
                <div className='post-edit-add-media-container'>
                    <span>{this.state.mediaType} :</span>
                    <input 
                        className='post-edit-add-media-input'
                        type='text'
                        value={this.state.mediaURL}
                        placeholder='URL du m??dia'
                        onChange={(e) => {this.setState({mediaURL: e.target.value.trim()})}} />
                    <input 
                        className='post-edit-add-media-button'
                        type='button'
                        value='Ajouter le m??dia'
                        onClick={() => {
                            if (this.state.mediaURL.trim().length === 0)
                                return;
                            let mediaType = MediaType.image;
                            if (this.state.mediaType === 'Audio')
                                mediaType = MediaType.audio;
                            else if (this.state.mediaType === 'Vid??o') 
                                mediaType = MediaType.video;
                            let m = new Media(-1, mediaType, this.state.mediaURL);
                            let media = this.state.media;
                            media.push(m);
                            let post = this.state.post;
                            post.media = media;
                            this.setState({post: post, mediaURL: ''});
                        }} />
                    <input
                        className='post-edit-add-media-close-button'
                        type='button'
                        value='X'
                        onClick={() => {
                            this.setState({mediaFlag: false});
                        }} />
                </div>
            );
        }

        return (
            <div className='post-edit-container'>
                <div className='post-edit-profil'>
                    <img
                        src={this.props.user.profil_picture_src} 
                        alt={this.props.user.names}
                        className='post-edit-profil-image'/>
                </div>
                <div className='post-edit-sub-container'>
                    <div className='post-edit-text-container'>
                        <textarea 
                            className='post-edit-text'
                            rows={(this.props.replyTo) ? 3 : 5}
                            cols={40}
                            wrap='hard'
                            placeholder={(this.props.placeholder) ? this.props.placeholder : 'Quoi de neuf ?'}
                            value={this.state.post.text}
                            onChange={(e) => {
                                let post = this.state.post;
                                post.text = e.target.value;
                                let postFlag = (post.text.trim().length > 0);
                                this.setState({post: post, postFlag: postFlag});
                            }}
                            >
                        </textarea>
                    </div>
                    {moreContent}
                    {addMediaContent}
                    <div className='post-edit-actions-bar'>
                        <div className='post-edit-actions-icons'>
                            <div className='post-edit-action-icon'>
                                <input 
                                    className='post-edit-action-icon-image'
                                    type='image'
                                    alt='Image'
                                    title='Image'
                                    src={require('../../../ressources/icons/image.png')}
                                    onClick={() => {
                                        this.setState({mediaFlag: true, mediaType: 'Image', mediaURL: ''});
                                    }} />
                            </div>
                            <div className='post-edit-action-icon'>
                                <input 
                                    className='post-edit-action-icon-image'
                                    type='image'
                                    alt='Vid??o'
                                    title='Vid??o'
                                    src={require('../../../ressources/icons/video.png')}
                                    onClick={() => {
                                        this.setState({mediaFlag: true, mediaType: 'Vid??o', mediaURL: ''});
                                    }} />
                            </div>
                            <div className='post-edit-action-icon'>
                                <input 
                                    className='post-edit-action-icon-image'
                                    type='image'
                                    alt='Audio'
                                    title='Audio'
                                    src={require('../../../ressources/icons/audio.png')}
                                    onClick={() => {
                                        this.setState({mediaFlag: true, mediaType: 'Audio', mediaURL: ''});
                                    }} />
                            </div>
                            <div className='post-edit-action-icon'>
                                <input 
                                    className='post-edit-action-icon-image'
                                    type='image'
                                    alt='Localisation'
                                    title='Localisation'
                                    src={require('../../../ressources/icons/location.png')}
                                    onClick={this.props.onClick} />
                            </div>
                            <div className='post-edit-action-icon'>
                                <input 
                                    className='post-edit-action-icon-image'
                                    type='image'
                                    alt='Sondage'
                                    title='Sondage'
                                    src={require('../../../ressources/icons/poll.png')}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        // TODO: set true 
                                        this.setState({ pollFlag: false});
                                    }} />
                            </div>
                            <div className='post-edit-action-icon'>
                                <input 
                                    className='post-edit-action-icon-image'
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
                                    className={
                                        'post-edit-action-text-button ' +
                                        'post-edit-action-text-button-' + this.state.postButtonFlag
                                    }
                                    type='button'
                                    value='Publier'
                                    onClick={() => {
                                        if (!this.state.postFlag)
                                            return;
                                        let post = this.state.post;
                                        post.reply_to_id = this.props.replyTo;
                                        PostServices.createPost(post, 
                                            (response) => {
                                                if (response.status === 200) {
                                                    let post = new Post();
                                                    post.user_id = this.state.post.user_id;
                                                    post.text = '';
                                                    post.media = [];
                                                    this.setState({post: post, mediaFlag: false, mediaURL: ''});
                                                    this.props.updateFeed();
                                                }
                                            },
                                            (error) => {
                                            }
                                        );
                                    }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}