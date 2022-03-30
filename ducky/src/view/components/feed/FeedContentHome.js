import React from "react";
import { PostEdit } from "../posts/PostEdit";
import { PostViewList } from "../posts/PostViewList";
import { StoriePreviewList } from "../stories/StoriePreviewList";

export class FeedContentHome extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='feed-content-item feed-content-home'>
                <div className='feed-content-item-left'>
                    <div className='feed-content-item-left-top'>
                        <h2>Accueil</h2>
                    </div>
                    <div className='feed-content-item-left-main'>
                        <div className='feed-content-post-edit-container'>
                            <PostEdit />
                        </div>
                        <div className='feed-content-storie-preview-list-container'>
                            <StoriePreviewList stories={this.props.stories} />
                        </div>
                        <div className='feed-content-post-view-list-container'>
                            <PostViewList posts={this.props.posts}/>
                        </div>
                    </div>
                </div>
                <div className='feed-content-item-right'>

                </div>
            </div>
        );
    }
}