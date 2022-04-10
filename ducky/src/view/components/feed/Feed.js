import React from "react";
import { FeedContent } from "./FeedContent";
import { FeedNavigation } from "./FeedNavigation";

export class Feed extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            search: '',
            contentId: 'home', 
        };

        this.handleSearchBarChange.bind(this);
        this.setContentId.bind(this);
    }

    handleSearchBarChange(event) {
        event.preventDefault();
        this.setState({search: event.value});
    }

    setContentId(id) {
        this.setState({contentId: id});
    }

    render() {
        return (
            <div className='feed'>
                <FeedNavigation
                    handleSearchBarChange={(e) => this.handleSearchBarChange(e)}   
                    handleHome={() => this.setContentId('home')}
                    handleMessages={() => this.setContentId('messages')}
                    handleProfil={() => this.setContentId('profil')}
                    handleFriends={() => this.setContentId('friends')}
                    handleSuggestions={() => this.setContentId('suggestions')}
                    handleStatistics={() => this.setContentId('statistics')}
                    handleParameters={() => this.setContentId('parameters')}
                    handleLogOut={() => this.props.handleLogOut()}
                    notifications={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]}/>
                <FeedContent
                    contentId={this.state.contentId} 
                    onClickStories={() => this.setContentId('stories')}
                    handleUpdateProfil={() => this.setContentId('profil-update')}/>
            </div>
        );
    }
}