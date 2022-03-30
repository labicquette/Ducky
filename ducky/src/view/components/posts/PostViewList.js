import React from "react";
import { PostView } from "./PostView";

export class PostViewList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='post-view-list-container'>
                {this.props.posts.map(post => <PostView post={post} />)}
            </div>
        );
    }
}