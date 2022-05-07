import React from "react";
import { Post } from "../../../model/objects/Post";
import { PostServices } from "../../../model/services/PostServices";
import { UserServices } from "../../../model/services/UserServices";
import { PostViewList } from "../posts/PostViewList";

export class UserProfilView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            page: 0,
            posts: [],
            mentionnedPosts: [],
            likedPosts: [],
            followersLength: 0,
            follwingsLength: 0,
            active: false,
        };

        UserServices.getFollowers(
            this.props.user.id, 
            (response) => {
                if (response.status === 200) {
                    if (!this.props.me) {
                        let active = response.data.followers
                            .map(f => f.follower_id)
                            .includes(this.props.currentUser.id);
                        this.setState({active: active});
                    }
                    this.setState({followersLength: response.data.followers.length});
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
                    this.setState({followingsLength: response.data.followings.length});
                }
                else {
                    console.log('Liste de followings inaccessible !');
                }
            },
            (error) => {
                console.log('Liste de followings inaccessible !');
            }
        );
        
        PostServices.getPostsByMentionnedUsers(
            [this.props.user.id],
            (response) => {
                if (response.status === 200) {
                    console.log(response);
                }
                else {
                    console.log('Impossible de charger les posts de mention !');
                }
            },
            (error) => {
                console.log('Impossible de charger les posts de mention !');
            }
        );

        this.updateFeed.bind(this);
        this.updateFeed();
    }

    updateFeed() {
        PostServices.getPostsByUser(
            this.props.user.id,
            (response) => {
                if (response.status === 200) {
                    let posts = [];
                    for (let postObject of response.data) {
                        let post = Post.fromJSON(postObject);
                        post.user = this.props.user;
                        // TODO: get replies to and replies
                        posts.push(post);
                        this.setState({posts: posts});
                    }
                }
                else {
                    console.log('Impossible de charger les posts !');
                }
            },
            (error) => {
                console.log('Impossible de charger les posts !');
            }
        );
    }

    render() {
        let posts = [];
        switch (this.state.page) {
            case 1: // mentions
                posts = this.state.mentionnedPosts;
                break;
            case 2: // likes
                posts = this.state.likedPosts;
                break;
            default: // posts
                posts = this.state.posts
        }

        let privateContent= null;
        if (this.props.user.private) {
            privateContent = (
                <div className='user-profil-view-header-infos-private'>
                    <img 
                        className='user-profil-view-header-infos-private-image' 
                        src={require('../../../ressources/icons/private.png')}
                        alt='Compte privé' />
                </div>
            );
        }

        let actionsContent;
        if (this.props.me) {
            actionsContent = (
                <div className='user-profil-view-header-infos-actions'>
                    <input
                        className='user-profil-view-header-infos-action-item '
                        type='button'
                        value='Modifier le profil' 
                        onClick={this.props.handleUpdateProfil}/>
                    <input
                        className='user-profil-view-header-infos-action-item'
                        type='button'
                        value='Paramètres'
                        />
                </div>
            );
        }
        else {
            actionsContent = (
                <div className='user-profil-view-header-infos-actions'>
                    <input
                        className='user-profil-view-header-infos-action-item'
                        type='button'
                        value='Message' 
                        />
                    <input
                        className='user-profil-view-header-infos-action-item'
                        type='button'
                        value={(this.state.active) ? 'Abonné(e)' : 'S\'abonner'}
                        onClick={
                            () => {
                                if (this.state.active) {
                                    UserServices.delFollowing(
                                        this.props.currentUser.id,
                                        this.props.user.id,
                                        (response) => {
                                            if (response.status === 200)
                                                this.setState({active: false});
                                        },
                                        (error) => {
                                        }
                                    );
                                }
                                else {
                                    UserServices.addFollowing(
                                        this.props.currentUser.id,
                                        this.props.user.id,
                                        (response) => {
                                            if (response.status === 200)
                                                this.setState({active: true});
                                        },
                                        (error) => {
                                        }
                                    );
                                }
                            }
                        }
                        />
                </div>

            );
        }

        let user = this.props.user;
        if (this.props.currentUser) {
            user = this.props.currentUser;
        }

        return (
            <div className='user-profil-view-container'>
                <div className='user-profil-view-header'>
                    <img
                        src={this.props.user.profil_picture_src} 
                        alt={this.props.user.names}
                        className='user-profil-view-header-image' />
                    <div className='user-profil-view-header-infos'>
                        <div className='user-profil-view-header-infos-names-private'>
                            <div className='user-profil-view-header-infos-names'>
                                <span className='user-profil-view-header-infos-names-names'>
                                    {this.props.user.names}
                                </span>
                                <span className='user-profil-view-header-infos-names-username'>
                                    {this.props.user.username}
                                </span>
                            </div>
                            {privateContent}
                        </div>
                        <div className='user-profil-view-header-infos-counters'>
                            <div className='user-profil-view-header-infos-counters-item'>
                                <span className='value'>{this.state.posts.length}</span>
                                <span>Publications</span>
                            </div>
                            <div className='user-profil-view-header-infos-counters-item'>
                                <span className='value'>{this.state.followersLength}</span>
                                <span>Abonnés</span>
                            </div>
                            <div className='user-profil-view-header-infos-counters-item'>
                                <span className='value'>{this.state.followingsLength}</span>
                                <span>Abonnements</span>
                            </div>
                        </div>
                        <div className='user-profil-view-header-infos-biography'>
                            <h4>Intro</h4>
                            {
                                (this.props.user.biography) ? 
                                this.props.user.biography : 'Aucune biographie.'
                            }
                        </div>
                        {actionsContent}
                    </div>
                </div>
                <div className='user-profil-view-content'>
                    <div className='user-profil-view-content-navigation'>
                        <div className='user-profil-view-content-navigation-item'>
                            <span>PUBLICATIONS</span>
                        </div>
                        <div className='user-profil-view-content-navigation-item'>
                            <span>MENTIONS</span>
                        </div>
                        <div className='user-profil-view-content-navigation-item'>
                            <span>J'AIME</span>
                        </div>
                    </div>
                    <div className='user-profil-view-content-body'>
                        <PostViewList 
                            user={user} 
                            posts={posts}
                            updateFeed={() => this.updateFeed()} 
                            handleSetOtherUser={this.props.handleSetOtherUser}/>
                    </div>
                </div>
            </div>
        );
    }
}