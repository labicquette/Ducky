import React from "react";
import { StoriePreviewList2 } from "../stories/StoriePreviewList2";
import { StorieViewList } from "../stories/StorieViewList";

export class FeedContentStories extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selected: -1,
        };
    }

    render() {
        let storiesContent = null;
        if (
            this.state.selected > -1 &&
            this.state.selected < this.props.storiesList.length
        ) {
            storiesContent = (
                <StorieViewList stories={this.props.storiesList[this.state.selected]} />
            );
        }
        else {
            storiesContent = (
                <div className='feed-content-stories-empty'>
                    <img
                        src={require('../../../ressources/icons/story.png')}
                        className='feed-content-stories-empty-image' />
                    <h3>Vos stories</h3>
                    <span>Partagez vos meilleurs moments !</span>
                    <input
                        className='feed-content-stories-empty-button'
                        type='button'
                        value='Créer une nouvelle storie' />
                </div>
            );
        }

        return (
            <div className='feed-content-item feed-content-stories'>
                <div className='feed-content-stories-main'>
                    <div className='feed-content-stories-left'>
                        <StoriePreviewList2 storiesList={this.props.storiesList} />
                    </div>
                    <div className='feed-content-stories-right'>
                        {storiesContent}
                    </div>
                </div>
            </div>
        );
    }
}