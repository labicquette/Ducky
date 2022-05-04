import React from "react";
import { FeedContent } from "./FeedContent";
import { FeedNavigation } from "./FeedNavigation";

export class Feed extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            search: '',
            contentId: 'home', 
            user: this.props.user,
            otherUser: null
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

    setOtherUser(otherUser) {
        this.setState({otherUser: otherUser});
    }

    render() {
        return (
            <div className='feed'>
                <FeedNavigation
                    user={this.props.user}
                    handleSearchBarChange={(e) => this.handleSearchBarChange(e)}   
                    handleHome={() => this.setContentId('home')}
                    handleMessages={() => this.setContentId('messages')}
                    handleProfil={() => this.setContentId('profil')}
                    handleFriends={() => this.setContentId('friends')}
                    handleSuggestions={() => this.setContentId('suggestions')}
                    handleStatistics={() => this.setContentId('statistics')}
                    handleParameters={() => this.setContentId('profil-update')}
                    handleLogOut={() => this.props.handleLogOut()}
                    notifications={this.props.user.notifications}/>
                <FeedContent
                    user={this.props.user}
                    contentId={this.state.contentId} 
                    onClickStories={() => this.setContentId('stories')}
                    handleProfil={() => this.setContentId('profil')}
                    handleUpdateProfil={() => this.setContentId('profil-update')}
                    handleFriends={() => this.setContentId('friends')}
                    handleOtherProfil={() => this.setContentId('other-profil')}
                    handleSetUser={this.props.handleSetUser} 
                    handleSetOtherUser={(otherUser) => this.setOtherUser(otherUser)}
                    handleLogOut={() => this.props.handleLogOut()} />
            </div>
        );
    }
}