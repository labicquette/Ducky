import React from "react";
import { UserProfilView } from "../users/UserProfilView";

export class FeedContentProfil extends React.Component {

    render() {
        return (
            <div className='feed-content-item feed-content-profil'>
                <UserProfilView 
                    user={this.props.user} 
                    me={this.props.me}
                    posts={this.props.posts}
                    followersLength={this.props.user.followers.length}
                    followingsLength={this.props.user.followings.length}
                    handleUpdateProfil={this.props.handleUpdateProfil} 
                    handleFriends={this.props.handleFriends} />
            </div>
        );
    }
}