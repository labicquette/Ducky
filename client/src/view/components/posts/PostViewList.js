import React from "react";
import { PostView } from "./PostView";

export class PostViewList extends React.Component {
    
    render() {
        return (
            <div className='post-view-list-container'>
                {this.props.posts.map(post => (
                    <PostView 
                        user={this.props.user}
                        key={post.id} 
                        post={post}
                        updateFeed={this.props.updateFeed}
                        handleSetOtherUser={this.props.handleSetOtherUser} />)
                )}
            </div>
        );
    }
}