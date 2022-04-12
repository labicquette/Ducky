import React from "react";
import { UserProfilPreview } from "../users/UserProfilPreview";

export class PostView extends React.Component {

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
        
        let postTimeContent = (
            <div className='post-view-content-content-post-infos-item'>
                <span>{this.props.post.time.toLocaleString("fr-FR")}</span>
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

        if (!this.props.isReply) {

            if (this.props.post.reply_to) {
                postReplyToContent = (
                    <div className='post-view-content-content-body-post-replyto-container'>        
                        <PostView post={this.props.post.reply_to} isReply={true}/>
                    </div>
                );
            }

            actionsBarContent = (
                <div className='post-view-actions-bar'>

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

        return (
            <div className='post-view-container'> 
                {postPrologueContent}
                <div className='post-view-content'>
                    <div className='post-view-content-user-profile-picture'>
                        <img
                            src={this.props.post.user.profil_picture_src}
                            alt={this.props.post.user.names}
                            className='post-view-content-user-profile-picture-image' />
                        {userProfilPreviewContent}
                    </div>
                    <div className='post-view-content-content'>
                        <div className='post-view-content-content-header'>
                            <div className='post-view-content-content-header-user-infos'>
                                <div className='post-view-content-content-header-user-infos-names'>
                                    {this.props.post.user.names}
                                </div>
                                <div className='post-view-content-content-header-user-infos-username'>
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
                        </div>
                    </div>
                </div>
                {actionsBarContent}
                {replyContent}
            </div>
        );
    }

}