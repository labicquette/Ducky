import React from "react";
import { PostServices } from "../../../model/services/PostServices";
import { formatISODate } from "../../../model/utils";
import { PostEdit } from "./PostEdit";
import { UserProfilPreview } from "../users/UserProfilPreview";
import { Post } from "../../../model/objects/Post";
import { UserServices } from "../../../model/services/UserServices";
import { User } from "../../../model/objects/User";

export class PostView extends React.Component {

    constructor(props) {
        super(props);

        let like = (this.props.post.likes.map(like => like.user_id).includes(this.props.user.id));
        this.state = {
            reply_to: null,
            replies: [],
            like: like,
            likeLength: this.props.post.likes.length,
            replyEditFlag: false,
        };

        if (!this.props.isReply) {
            if (this.props.post.reply_to_id) {
                PostServices.getPost(
                    this.props.post.reply_to_id,
                    (response) => {
                        if (response.status === 200) {
                            let reply_to = Post.fromJSON(response.data);
                            UserServices.getUser(
                                reply_to.user_id,
                                (response) => {
                                    if (response.status === 200) {
                                        let user = User.fromJSON(response.data);
                                        reply_to.user = user;
                                        this.setState({reply_to: reply_to});
                                    }
                                },
                                (error) => {
                                }
                            );
                        }
                        else {
                            console.log('Impossible de charger le post de base !')
                        }
                    },
                    (error) => {
                        console.log('Impossible de charger le post de base !')
                    }   
                );
            }
        }

        PostServices.getPostsByReply(
            this.props.post.id,
            (response) => {
                console.log('>>>>><<<<', response);
                if (response.status === 200) {
                    let replies = [];
                    for (let replyObject of response.data) {
                        let reply = Post.fromJSON(replyObject);
                        UserServices.getUser(
                            reply.user_id,
                            (response) => {
                                if (response.status === 200) {
                                    let user = User.fromJSON(response.data);
                                    reply.user = user;
                                    replies.push(reply);
                                    this.setState({replies: replies});
                                }
                            },
                            (error) => {
                            }
                        );
                    }
                }
            },
            (error) => {
            }
        )
    }

    render() {
        let postPrologueContent = null;
        if (this.props.post.prologue) {
            postPrologueContent = (
                <div className='post-view-prologue'>
                    <span className='post-view-prologue-username'>
                        {this.props.post.prologue.user.names}
                        {this.props.post.prologue.comment}
                    </span>
                </div>
            );
        }

        let postLocationContent = null;
        if (this.props.post.location) {
            postLocationContent = (
                <div className='post-view-content-content-post-infos-item'>
                    <span>{this.props.post.location + ' · '}</span>
                </div>
            );
        }

        let postAudienceContent = (
            <div className='post-view-content-content-post-infos-item'>
                <span>{(this.props.post.private ? 'Privé' : 'Public') + ' · '}</span>
            </div>
        );
        
        let time = formatISODate(new Date(this.props.post.time));
        let postTimeContent = (
            <div className='post-view-content-content-post-infos-item'>
                <span>{time}</span>
            </div>
        );

        let postTextContent = (
            <div className='post-view-content-content-body-text'>
                <p>{this.props.post.text}</p>
            </div>
        );

        let postPollContent = null;
        if (this.props.post.polls.length > 0) {
            postPollContent =(
                <div className='post-view-content-content-body-poll-container'>

                </div>
            );
        }

        let postMediaContent = null;
        if (this.props.post.media.length > 0) {
            postMediaContent = (
                <div className='post-view-content-content-body-media-container'>

                </div>
            );
        }
    
        let postReplyToContent = null;
        let actionsBarContent = null;
        let replyContent = null;
        let deletePostContent = null;

        if (!this.props.isReply) {

            if (this.state.reply_to) {
                postReplyToContent = (
                    <div className='post-view-content-content-body-post-replyto-container'>        
                        <PostView 
                            post={this.state.reply_to} 
                            isReply={true} 
                            user={this.props.user} />
                    </div>
                );
            }

            if (this.props.user && this.props.user.id === this.props.post.user_id) {
                deletePostContent = (
                    <div className='post-view-action-item'>
                        <div className={
                            'post-view-action-image-container ' +
                            'post-view-action-image-container-red'
                            }>
                            <input
                                className='post-view-action-item-image'
                                type='image'
                                alt='Supprimer'
                                title='Supprimer'
                                src={require('../../../ressources/icons/delete.png')}
                                onClick={() => {
                                    PostServices.deletePost(this.props.post.id,
                                        (response) => {
                                            if (response.status === 200)
                                                this.props.updateFeed();
                                        },
                                        (error) => {
                                            console.log('Post non supprimé !');
                                        }
                                    );
                                }} />
                        </div>
                    </div>
                );
            }

            actionsBarContent = (
                <div className='post-view-actions-bar'>

                    <div className='post-view-action-item'>
                        <div className={
                            'post-view-action-image-container ' +
                            'post-view-action-image-container-red'
                            }>
                            <input
                                className='post-view-action-item-image'
                                type='image'
                                alt='Liker'
                                title='Liker'
                                src={
                                    (this.state.like) ?
                                    require('../../../ressources/icons/like_red.png'):
                                    require('../../../ressources/icons/like.png')
                                }
                                onClick={
                                    () => {
                                        if (!this.state.like) {
                                            PostServices.addPostLike(
                                                this.props.post.id,
                                                this.props.user.id,
                                                (response) => {
                                                    if (response.status === 200) {
                                                        let likeLength = this.state.likeLength;
                                                        likeLength++;
                                                        this.setState({like: true, likeLength: likeLength});
                                                    }
                                                },
                                                (error) => {}
                                            )
                                        }
                                        else {
                                            PostServices.delPostLike(
                                                this.props.post.id,
                                                this.props.user.id,
                                                (response) => {
                                                    if (response.status === 200) {
                                                        let likeLength = this.state.likeLength;
                                                        likeLength--;
                                                        this.setState({like: false, likeLength: likeLength});
                                                    }
                                                },
                                                (error) => {}
                                            )
                                        }
                                    }
                                } />
                        </div>
                        <span className='post-view-action-item-name'>
                            {this.state.likeLength}
                        </span>
                    </div>

                    <div className='post-view-action-item'>
                        <div className={
                            'post-view-action-image-container ' +
                            'post-view-action-image-container-blue'
                            }>
                            <input
                                className='post-view-action-item-image'
                                type='image'
                                alt='Répondre'
                                title='Répondre'
                                src={require('../../../ressources/icons/comment.png')}
                                onClick={
                                    () => {
                                        const replyEditFlag = this.state.replyEditFlag;
                                        this.setState({replyEditFlag: !replyEditFlag});
                                    }
                                } />
                        </div>
                        <span className='post-view-action-item-name'>
                            {this.props.post.replies.length}
                        </span>
                    </div>      

                    <div className='post-view-action-item'>
                        <div className={
                            'post-view-action-image-container ' +
                            'post-view-action-image-container-green'
                            }>
                            <input
                                className='post-view-action-item-image'
                                type='image'
                                alt='Partager'
                                title='Partager'
                                src={require('../../../ressources/icons/share.png')} />
                        </div>
                        <span className='post-view-action-item-name'>
                            {this.props.post.shares.length}
                        </span>
                    </div>  
                    
                    {deletePostContent}

                </div>
            );

            replyContent = (
                <div className='post-view-reply-container'>

                </div>
            );

        }

        let userProfilPreviewContent = (
            <div className='post-view-user-profil-preview'>
                <UserProfilPreview user={this.props.post.user} />
            </div>
        );

        let replyPostEditContent = null;
        if (this.state.replyEditFlag) {
            replyPostEditContent = (
                <div>
                    <PostEdit 
                        replyTo={this.props.post.id}
                        user={this.props.user} 
                        placeholder='Tapez votre réponse ...'
                        updateFeed={this.props.updateFeed}/>
                </div>
            );
        }

        return (
            <div className={
                    (!this.props.isReply) ? 
                        'post-view-container' : 
                        'post-view-reply-container'}> 
                {postPrologueContent}
                <div className='post-view-content'>
                    <div 
                        className='post-view-content-user-profile-picture'
                        onClick={() => {this.props.handleSetOtherUser(this.props.post.user)}}>
                        <img
                            src={this.props.post.user.profil_picture_src}
                            alt={this.props.post.user.names}
                            className='post-view-content-user-profile-picture-image' />
                        {userProfilPreviewContent}
                    </div>
                    <div className='post-view-content-content'>
                        <div className='post-view-content-content-header'>
                            <div className='post-view-content-content-header-user-infos'>
                                <div 
                                    className='post-view-content-content-header-user-infos-names'
                                    onClick={() => {this.props.handleSetOtherUser(this.props.post.user)}}>
                                    {this.props.post.user.names}
                                </div>
                                <div 
                                    className='post-view-content-content-header-user-infos-username'
                                    onClick={() => {this.props.handleSetOtherUser(this.props.post.user)}}>
                                    {'@' + this.props.post.user.username}
                                    {userProfilPreviewContent}
                                </div>
                            </div>
                            {userProfilPreviewContent}
                            <div className='post-view-content-content-header-post-infos'>
                                {postLocationContent}
                                {postAudienceContent}
                                {postTimeContent}
                            </div>
                        </div>
                        <div className='post-view-content-content-body'>
                            {postTextContent}
                            {postPollContent}
                            {postMediaContent}
                            {postReplyToContent}   
                            {actionsBarContent} 
                            {replyPostEditContent}                        
                        </div>
                    </div>
                </div>
                {replyContent}
            </div>
        );
    }

}