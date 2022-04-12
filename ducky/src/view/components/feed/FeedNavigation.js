import React from "react";
import { NotificationListView } from "../notifications/NotificationListView";
import { FeedMoreMenu } from "./FeedMoreMenu";

export class FeedNavigation extends React.Component {
    
    render() {
        return (
            <div className='feed-navigation'>
                <div className='feed-navigation-logo'>         
                    <img
                        type='button'
                        src={require('../../../ressources/ducky.png')}
                        alt='Ducky'
                        title='Ducky'
                        onClick={this.props.handleHome} />
                </div>   
                <div className='feed-navigation-search-bar'>
                    <input
                        className='feed-navigation-search-bar-input'
                        type='text'
                        placeholder='Rechercher sur Ducky' />
                </div>
                <div className='feed-navigation-menu'>
                    <div className='feed-navigation-menu-item'>
                        <input 
                            className='feed-navigation-menu-item-image'
                            type='image'
                            src={require('../../../ressources/icons/home.png')}
                            alt='Accueil'
                            onClick={this.props.handleHome} /> 
                    </div>
                    <div className='feed-navigation-menu-item'>
                        <input 
                            className='feed-navigation-menu-item-image'
                            type='image'
                            src={require('../../../ressources/icons/profil.png')}
                            alt='Profil'
                            onClick={this.props.handleProfil} /> 
                    </div>
                    <div className='feed-navigation-menu-item'>
                        <input 
                            className='feed-navigation-menu-item-image'
                            type='image'
                            src={require('../../../ressources/icons/friends.png')}
                            alt='Abonnés et Abonnements'
                            onClick={this.props.handleFriends} /> 
                    </div>
                    <div className='feed-navigation-menu-item'>
                        <input 
                            className='feed-navigation-menu-item-image'
                            type='image'
                            src={require('../../../ressources/icons/message.png')}
                            alt='Message'
                            onClick={this.props.handleMessages} /> 
                    </div>
                    <div className='feed-navigation-menu-item feed-notifications-container'>
                        <input 
                            className='feed-navigation-menu-item-image'
                            type='image'
                            src={require('../../../ressources/icons/notification.png')}
                            alt='Notifications'
                             /> 
                        <NotificationListView notifications={this.props.notifications} />
                    </div>
                    <div className='feed-navigation-menu-item feed-more-menu-container'>
                        <input 
                            className='feed-navigation-menu-item-image'
                            type='image'
                            src={require('../../../ressources/icons/more.png')}
                            alt='Plus'
                             /> 
                        <FeedMoreMenu 
                            handleSuggestions={() => this.props.handleSuggestions()} 
                            handleStatistics={() => this.props.handleStatistics()} 
                            handleParameters={() => this.props.handleParameters()}
                            handleLogOut={() => this.props.handleLogOut()} />
                    </div>
                </div>            
            </div>
        );
    }
}