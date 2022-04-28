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
                    handleUpdateProfil={this.props.handleUpdateProfil} />
            </div>
        );
    }
}