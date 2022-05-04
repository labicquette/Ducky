import React from "react";
import { FollowerViewItem } from "./FollowerViewItem";
import { FollowingViewItem } from "./FollowingViewItem";

export class FollowsViewList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            onglet: 1
        };
    }

    render() {
        let followListContent;

        // followers
        if (this.state.onglet === 1) { 
            followListContent = this.props.followers.map(
                follower => (
                    <FollowerViewItem 
                        key={follower.id} 
                        user={this.props.user}
                        follower={follower}
                        active={true} />
                )
            );
        } 

        // followings
        else {
            followListContent = this.props.followings.map(
                following => (
                    <FollowingViewItem 
                        key={following.id} 
                        user={this.props.user}
                        following={following}
                        active={true} />
                )
            )
        }


        return (
            <div className='follows-view-list-container'>
                <div className='follows-view-list-titles-bar'>
                    <div 
                        className={
                            'follows-view-list-title' + (
                            (this.state.onglet === 1) ? ' follows-view-list-title-select': '')
                        }
                        onClick={() => {
                            this.setState({ onglet: 1 });
                        }}>
                        <span className='follows-view-list-title-value'>
                            {this.props.followers.length}
                        </span>
                        <span className='follows-view-list-title-name'>Abonnés</span>
                    </div>
                    <div 
                        className={
                            'follows-view-list-title' + (
                            (this.state.onglet === 2) ? ' follows-view-list-title-select': '')
                        }
                        onClick={() => {
                            this.setState({ onglet: 2 });
                        }}>    
                        <span className='follows-view-list-title-value'>
                            {this.props.followings.length}
                        </span>
                        <span className='follows-view-list-title-name'>Abonnements</span>
                    </div>
                </div>
                <div className='follows-view-list-content'>
                    {followListContent}
                </div>
            </div>
        );
    }
}