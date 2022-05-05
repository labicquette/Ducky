import React from "react";
import { User } from "../../../model/objects/User";
import { UserServices } from "../../../model/services/UserServices";
import { FollowsViewList } from "../users/FollowsViewList";

export class FeedContentFriends extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            followers: [],
            followings: [],
        };

        UserServices.getFollowers(
            this.props.user.id, 
            (response) => {
                if (response.status === 200) {
                    let followers = [];
                    for (let followObject of response.data.followers) {
                        UserServices.getUser(
                            followObject.follwer_id,
                            (response) => {
                                if (response.status === 200) {
                                    let follower = User.fromJSON(response.data);
                                    follower.follow_time = followObject.time;
                                    followers.push(follower);
                                    followers.sort(
                                        (f1, f2) => new Date(f2.follow_time) - new Date(f1.follow_time)
                                    );
                                    this.setState({followers: followers});
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
                                    console.log(response);
                                    followings.push(following);
                                    followings.sort(
                                        (f1, f2) => new Date(f2.follow_time) - new Date(f1.follow_time)
                                    );
                                    this.setState({followings: followings});
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
        return (
            <div className='feed-content-item feed-content-friends'> 
                <div className='feed-content-item-top feed-content-friends-top'>
                    <img 
                        src={this.props.user.profil_picture_src}
                        alt={this.props.user.names}
                        className='feed-content-friends-top-image'/>
                    <h3>Abonnés et Abonnements</h3>
                </div>
                <div className='feed-content-friends-main'>
                    <FollowsViewList 
                        user={this.props.user}
                        followers={this.state.followers} 
                        followings={this.state.followings} />
                </div>
            </div>
        );
    }
}