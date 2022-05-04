import React from "react";
import { Post } from "../../../model/objects/Post";
import { User } from "../../../model/objects/User";
import { PostServices } from "../../../model/services/PostServices";
import { UserServices } from "../../../model/services/UserServices";
import { PostEdit } from "../posts/PostEdit";
import { PostViewList } from "../posts/PostViewList";
import { FollowingViewItem } from "../users/FollowingViewItem";
//import { StoriePreviewList } from "../stories/StoriePreviewList";

export class FeedContentHome extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: this.props.posts,
            suggestions: [],
        }

        PostServices.getAllPosts(
            (response) => {
                if (response.status === 200) {
                    let posts = [];
                    for (let postObject of response.data) {
                        let post = Post.fromJSON(postObject);
                        UserServices.getUser(post.user_id,
                            (response) => {
                                if (response.status === 200) {
                                    const userObject = response.data;
                                    post.user = User.fromJSON(userObject);
                                    posts.push(post);
                                    this.setState({posts: posts});
                                }
                                else {
                                    console.log('post :', post.id, 'cant load user :', post.user_id);
                                }
                            },
                            (error) => {
                                console.log('post :', post.id, 'cant load user :', post.user_id);
                            }
                        );
                    }
                }
            },
            (error) => {
                console.log('Impossible de charger les posts');
            }
        )

        UserServices.getAllUsers(
            (response) => {
                if (response.status === 200) {

                    UserServices.getFollowings(this)

                    let users = [];
                    for (let userObject of response.data) {
                        let user = User.fromJSON(userObject);
                        users.push(user);
                    }
                    this.setState({suggestions: users});
                }
            },
            (error) => {

            }
        )
    }

    render() {
        /**
        let storiesContent = (
            <div className='feed-content-storie-preview-list-container'>
                <div className='feed-content-home-main-title'>
                    <span>Stories</span>
                </div>
                <StoriePreviewList user={this.props.user} stories={this.props.stories} />
            </div>
        );
        */

        let suggestionsContent = null;
        if (this.state.suggestions.length === 0) {
            suggestionsContent = (
                <div className='feed-content-home-suggestion-list-container'>
                    Aucune suggestion
                </div>
            );
        }
        else {
            suggestionsContent = (
                <div className='feed-content-home-suggestion-list-container'>
                    {this.state.suggestions.map(following => (
                        <FollowingViewItem
                            key={following.id}
                            user={this.props.user}
                            following={following}
                            active={false} />
                    ))}
                </div>
            )
        }

        return (
            <div className='feed-content-item feed-content-home'>
                <div className='feed-content-home-left'>
                    <div className='feed-content-home-left-item'>
                        <div 
                            className='feed-content-user-infos'
                            onClick={this.props.handleProfil}>
                            <img
                                src={this.props.user.profil_picture_src} 
                                alt={this.props.user.names}
                                className='feed-content-user-infos-image'/>
                            <div className='feed-content-user-infos-names'>
                                <h4>{this.props.user.names}</h4>
                                <h5>{'@' + this.props.user.username}</h5>
                            </div>
                        </div>
                    </div>
                    <div className='feed-content-home-left-item'>
                        <h4>Statistiques</h4>
                        <div className='feed-content-home-statistics-container'>
                            <div className='feed-content-home-statistics-item'>
                                <span>{this.props.user.posts.length}</span>
                                Publications
                            </div>
                            <div className='feed-content-home-statistics-item'>
                                <span>{this.props.user.followers.length}</span>
                                Abonné(e)s
                            </div>
                            <div className='feed-content-home-statistics-item'>
                                <span>{this.props.user.followings.length}</span>
                                Abonnements
                            </div>

                        </div>
                        <input
                            className='feed-content-home-left-action-button'
                            type='button'
                            value='Afficher les statistiques'
                            onClick={this.props.handleStatistics} />
                    </div>
                    <div className='feed-content-home-left-item'>
                        <h4>Suggestions</h4>
                        {suggestionsContent}
                    </div>
                </div>
                <div className='feed-content-home-main'>
                    <div className='feed-content-item-top'>
                        <h3>Fil d'actualité</h3>
                    </div>
                    <div className='feed-content-home-main-main'>
                        <div className='feed-content-post-edit-container'>
                            <PostEdit user={this.props.user} />
                        </div>
                        <div className='feed-content-post-view-list-container'>
                            <div className='feed-content-home-main-title'>
                                <span>Publications</span>
                            </div>
                            <PostViewList posts={this.state.posts}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}