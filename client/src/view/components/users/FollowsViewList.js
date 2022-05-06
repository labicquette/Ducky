import React from "react";
import { User } from "../../../model/objects/User";
import { UserServices } from "../../../model/services/UserServices";
import { FollowerViewItem } from "./FollowerViewItem";
import { FollowingViewItem } from "./FollowingViewItem";

export class FollowsViewList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            onglet: 1,
            followers: [],
            followings: [],
        };

        this.state = {
            followers: [],
            followings: [],
            followers_ids: [],
            followings_ids: [],
        };

        UserServices.getFollowers(
            this.props.user.id, 
            (response) => {
                if (response.status === 200) {
                    let followers = [];
                    for (let followObject of response.data.followers) {
                        UserServices.getUser(
                            followObject.follower_id,
                            (response) => {
                                if (response.status === 200) {
                                    let follower = User.fromJSON(response.data);
                                    follower.follow_time = followObject.time;
                                    followers.push(follower);
                                    followers.sort(
                                        (f1, f2) => new Date(f2.follow_time) - new Date(f1.follow_time)
                                    );
                                    this.setState({
                                        followers: followers,
                                        followers_ids: followers.map(f => f.id),
                                    });
                                }
                                else {
                                    console.log('Follower ', followObject.follwer_id, ' introuvable !');
                                }
                            },
                            (error) => {
                                console.log('Follower ', followObject.follwer_id, ' introuvable !');
                            }
                        );
                    }
                }
                else {
                    console.log('Liste de followers inaccessible !');
                }
            },
            (error) => {
                console.log('Liste de followers inaccessible !');
            }
        );

        UserServices.getFollowings(
            this.props.user.id, 
            (response) => {
                if (response.status === 200) {
                    let followings = [];
                    for (let followObject of response.data.followings) {
                        UserServices.getUser(
                            followObject.following_id,
                            (response) => {
                                if (response.status === 200) {
                                    let following = User.fromJSON(response.data);
                                    following.follow_time = followObject.time;
                                    followings.push(following);
                                    followings.sort(
                                        (f1, f2) => new Date(f2.follow_time) - new Date(f1.follow_time)
                                    );
                                    this.setState({
                                        followings: followings,
                                        followings_ids: followings.map(f => f.id)
                                    });
                                }
                                else {
                                    console.log('Following ', followObject.follwer_id, ' introuvable !');
                                }
                            },
                            (error) => {
                                console.log('Following ', followObject.follwer_id, ' introuvable !');
                            }
                        );
                    }
                }
                else {
                    console.log('Liste de followings inaccessible !');
                }
            },
            (error) => {
                console.log('Liste de followings inaccessible !');
            }
        );
    }

    render() {
        let followListContent;

        // followers
        if (this.state.onglet === 1) { 
            followListContent = this.state.followers.map(
                follower => (
                    <FollowerViewItem 
                        key={follower.id} 
                        user={this.props.user}
                        follower={follower}
                        active={this.state.followings_ids.includes(follower.id)}
                        handleSetOtherUser={() => this.props.handleSetOtherUser(follower)} />
                )
            );
        } 

        // followings
        else {
            followListContent = this.state.followings.map(
                following => (
                    <FollowingViewItem 
                        key={following.id} 
                        user={this.props.user}
                        following={following}
                        active={true}
                        handleSetOtherUser={() => this.props.handleSetOtherUser(following)} />
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
                            {this.state.followers.length}
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
                            {this.state.followings.length}
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