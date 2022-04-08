import React from "react";
import { FollowsViewList } from "../users/FollowsViewList";

export class FeedContentFriends extends React.Component {

    render() {
        return (
            <div className='feed-content-item feed-content-friends'> 
                <div className='feed-content-item-top feed-content-friends-top'>
                    <img 
                        src={require('../../../ressources/profil_test.png')}
                        className='feed-content-friends-top-image'/>
                    <h3>Abonnés et Abonnements</h3>
                </div>
                <div className='feed-content-friends-main'>
                    <FollowsViewList 
                        followers={this.props.followers} 
                        followings={this.props.followings} />
                </div>
            </div>
        );
    }
}