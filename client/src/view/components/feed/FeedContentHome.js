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
        };

        UserServices.getFollowings(
            this.props.user.id,
            (response) => {
                if (response.status === 200) {
                    let followings = response.data.followings.map(f => f.following_id);
                    UserServices.getAllUsers(
                        (response) => {
                            if (response.status === 200) {
                                let users = [];
                                for (let userObject of response.data) {
                                    let user = User.fromJSON(userObject);
                                    if (user.id !== this.props.user.id && !followings.includes(user.id))
                                        users.push(user);
                                }
                                this.setState({suggestions: users});
                            }
                        },
                        (error) => {
            
                        }
                    )
                }
            },
            (error) => {

            }
        );

        this.updateFeed.bind(this);
        this.updateFeed();
    }

    updateFeed() {
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
                                    posts.sort(
                                        (p1, p2) => new Date(p2.time) - new Date(p1.time)
                                    );
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
                            active={false}
                            handleSetOtherUser={() => this.props.handleSetOtherUser(following)} />
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
                        <h4>Suggestions</h4>
                        {suggestionsContent}
                    </div>
                    <div className='feed-content-home-left-item feed-content-home-infos'>
                        © 2022 DUCKY  <br />
                        Par
                        <a
                        target='_blank' rel="noopener noreferrer"
                        href='https://www.linkedin.com/in/ben-kabongo-3179421a7?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B3kOBXx3DSIKVNQWVGIHg6w%3D%3D'>
                            Ben kabongo
                        </a>
                        <span>et</span>
                        <a
                        target='_blank' rel="noopener noreferrer"
                        href='https://www.linkedin.com/in/th%C3%A9o-charlot-638a23218?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BDGwRMhYcR%2BGNubkSCja9xw%3D%3D'>
                            Théo Charlot
                        </a>
                    </div>
                </div>
                <div className='feed-content-home-main'>
                    <div className='feed-content-item-top'>
                        <h3>Fil d'actualité</h3>
                    </div>
                    <div className='feed-content-home-main-main'>
                        <div className='feed-content-post-edit-container'>
                            <PostEdit 
                                user={this.props.user} 
                                updateFeed={() => this.updateFeed()}/>
                        </div>
                        <div className='feed-content-post-view-list-container'>
                            <div className='feed-content-home-main-title'>
                                <span>Publications</span>
                            </div>
                            <PostViewList 
                                user={this.props.user}
                                posts={this.state.posts}
                                updateFeed={() => this.updateFeed()}
                                handleSetOtherUser={this.props.handleSetOtherUser}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}