import React from "react";
import { FeedContent } from "./FeedContent";
import { FeedNavigation } from "./FeedNavigation";

export class Feed extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            search: '',
            contentId: 0, 
        };

        this.handleSearchBarChange.bind(this);
        this.onClickHome.bind(this);
        this.onClickFriends.bind(this);
        this.onClickMessages.bind(this);
        this.onClickNotifications.bind(this);
        this.onClickProfil.bind(this);
        this.onClickMore.bind(this);
    }

    handleSearchBarChange(event) {
        event.preventDefault();
        this.setState({search: event.value});
    }

    onClickHome() {

    }

    onClickFriends() {

    }

    onClickMessages() {

    }

    onClickNotifications() {

    }

    onClickProfil() {

    }

    onClickMore() {

    }

    render() {
        return (
            <div className='feed'>
                <FeedNavigation
                    handleSearchBarChange={(e) => this.handleSearchBarChange(e)}   
                    onClickHome={() => this.onClickHome()}
                    onClickFriends={() => this.onClickFriends()}
                    onClickMessages={() => this.onClickMessages()}
                    onClickNotifications={() => this.onClickNotifications()}
                    onClickProfil={() => this.onClickProfil()}
                    onClickMore={() => this.onClickMore()} />
                <FeedContent
                    contentId={this.state.contentId} />
            </div>
        );
    }
}