import React from "react";
import { FollowerViewItem } from "./FollowerViewItem";

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
        if (this.state.onglet == 2) { 
            followListContent = this.props.followers.map(
                follower => (
                    <FollowerViewItem />
                )
            );
        } 

        // followings
        else {
            followListContent = this.props.followings.map(
                following => (
                    <FollowerViewItem />
                )
            )
        }


        return (
            <div className='follows-view-list-container'>
                <div className='follows-view-list-titles-bar'>
                    <div 
                        className={
                            'follows-view-list-title' + (
                            (this.state.onglet == 1) ? ' follows-view-list-title-select': '')
                        }
                        onClick={() => {
                            this.setState({ onglet: 1 });
                            alert(this.state.onglet);
                        }}>
                        <span className='follows-view-list-title-value'>25</span>
                        <span className='follows-view-list-title-name'>Abonnés</span>
                    </div>
                    <div 
                        className={
                            'follows-view-list-title' + (
                            (this.state.onglet == 2) ? ' follows-view-list-title-select': '')
                        }
                        onClick={() => {
                            this.setState({ onglet: 2 });
                            alert(this.state.onglet);
                        }}>    
                        <span className='follows-view-list-title-value'>12</span>
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