import React from "react";
import { PollEditor } from "../poll/PollEditor";
import { Media, MediaType } from "../../../model/objects/Media";
import { Post } from "../../../model/objects/Post";
import { MediaEdit } from "../media/MediaEdit";

export class PostEdit extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            post: new Post(),
            media: [],
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
                            rows={5}
                            cols={40}
                            wrap='hard'
                            placeholder='Quoi de neuf ?'
                            >
                        </textarea>
                    </div>
                    {moreContent}
                    <div className='post-edit-actions-bar'>
                        <div className='post-edit-actions-icons'>
                            <div className='post-edit-action-icon'>
                                <input
                                    className='post-edit-action-icon-file'
                                    id='post-edit-action-icon-file-image'
                                    type='file'
                                    accept='images'
                                    onChange={(e) => {
                                        let media = this.state.media;
                                        let input = document.getElementById('post-edit-action-icon-file-image');
                                        for (let file of input.files) {
                                            let m = new Media(null, MediaType.image, e.target.result);    
                                            let img = document.createElement('img');
                                            img.file = file;
                                            let reader = new FileReader();
                                            reader.onload = (
                                                function(aImg) {
                                                    return function(e) { 
                                                        aImg.src = e.target.result; 
                                                    }; 
                                                }
                                            )(img);
                                            reader.readAsDataURL(file);
                                            m.img = img;
                                            m.src = img.file;
                                            m.id = media.length;
                                            media.push(m);
                                        }
                                        this.setState({media: media});
                                        console.log(this.state.media);
                                    }} />
                                <input 
                                    className='post-edit-action-icon-image'
                                    type='image'
                                    alt='Image'
                                    title='Image'
                                    src={require('../../../ressources/icons/image.png')}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        let input = document.getElementById('post-edit-action-icon-file-image');
                                        input.click();
                                    }} />
                            </div>
                            <div className='post-edit-action-icon'>
                                <input 
                                    className='post-edit-action-icon-image'
                                    type='image'
                                    alt='Vidéo'
                                    title='Vidéo'
                                    src={require('../../../ressources/icons/video.png')}
                                    onClick={this.props.onClick} />
                            </div>
                            <div className='post-edit-action-icon'>
                                <input 
                                    className='post-edit-action-icon-image'
                                    type='image'
                                    alt='Audio'
                                    title='Audio'
                                    src={require('../../../ressources/icons/audio.png')}
                                    onClick={this.props.onClick} />
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
                                        this.setState({ pollFlag: true});
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
                                    onClick={this.props.onClick} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}