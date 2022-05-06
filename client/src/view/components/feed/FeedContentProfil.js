import React from "react";
import { UserProfilView } from "../users/UserProfilView";

export class FeedContentProfil extends React.Component {

    render() {
        return (
            <div className='feed-content-item feed-content-profil'>
                <UserProfilView 
                    user={this.props.user} 
                    currentUser={this.props.currentUser}
                    me={this.props.me} />
            </div>
        );
    }
}