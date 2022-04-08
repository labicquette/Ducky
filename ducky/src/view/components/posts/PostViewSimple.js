import React from "react";
import { PostStatus } from "../../../model/objects/Post";

export class PostViewSimple extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let postLocationContent = null;
        if (this.props.post.location) {
            postLocationContent = (
                <div className='post-view-content-content-post-infos-item'>
                    <img
                        src={require('../../../ressources/icons/location.png')} 
                        className='post-view-content-content-post-infos-item-image'/>
                    <span>{this.props.post.location}</span>
                </div>
            );
        }

        let postAudienceContent = (
            <div className='post-view-content-content-post-infos-item'>
                <img 
                    src={
                        (this.props.post.status == PostStatus.public) ? 
                        require('../../../ressources/icons/audience.png') :
                        require('../../../ressources/icons/friends.png')
                    } 
                    className='post-view-content-content-post-infos-item-image'/>
                <span>{this.props.post.status}</span>
            </div>
        );
        
        let postTimeContent = (
            <div className='post-view-content-content-post-infos-item'>
                <img
                    src={require('../../../ressources/icons/clock.png')} 
                    className='post-view-content-content-post-infos-item-image'/>
                <span>{this.props.post.time.toLocaleString("fr-FR")}</span>
            </div>
        );

        return (
            <div className='post-view-container'> 
                <div className='post-view-content'>
                    <img
                        src={this.props.post.user.profilePicture}
                        className='post-view-content-user-profile-picture' />
                    <div className='post-view-content-content'>
                        <div className='post-view-content-content-header'>
                            <div className='post-view-content-content-header-user-infos'>
                                <span className='post-view-content-content-header-user-infos-names'>
                                    {this.props.post.user.names}
                                </span>
                                <span className='post-view-content-content-header-user-infos-username'>
                                    {'@' + this.props.post.user.username}
                                </span>
                            </div>
                            <div className='post-view-content-content-header-post-infos'>
                                {postLocationContent}
                                {postAudienceContent}
                                {postTimeContent}
                            </div>
                        </div>
                        <div className='post-view-content-content-body'>
                            <div className='post-view-content-content-body-text'>
                                <p>{this.props.post.text}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}