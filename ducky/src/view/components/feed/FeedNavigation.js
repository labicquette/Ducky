import React from "react";

export class FeedNavigation extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='feed-navigation'>
                <div className='feed-navigation-logo'>         
                    <img
                        type='button'
                        src={require('../../../ressources/ducky.png')}
                        alt='Ducky'
                        title='Ducky' />
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
                             /> 
                    </div>
                    <div className='feed-navigation-menu-item'>
                        <input 
                            className='feed-navigation-menu-item-image'
                            type='image'
                            src={require('../../../ressources/icons/profil.png')}
                             /> 
                    </div>
                    <div className='feed-navigation-menu-item'>
                        <input 
                            className='feed-navigation-menu-item-image'
                            type='image'
                            src={require('../../../ressources/icons/friends.png')}
                             /> 
                    </div>
                    <div className='feed-navigation-menu-item'>
                        <input 
                            className='feed-navigation-menu-item-image'
                            type='image'
                            src={require('../../../ressources/icons/message.png')}
                             /> 
                    </div>
                    <div className='feed-navigation-menu-item'>
                        <input 
                            className='feed-navigation-menu-item-image'
                            type='image'
                            src={require('../../../ressources/icons/notification.png')}
                             /> 
                    </div>
                    <div className='feed-navigation-menu-item'>
                        <input 
                            className='feed-navigation-menu-item-image'
                            type='image'
                            src={require('../../../ressources/icons/more.png')}
                             /> 
                    </div>
                </div>
                <div className='feed-navigation-actions-bar'>
                    <div className='feed-navigation-action'>
                        
                            
                    </div>
                </div>               
            </div>
        );
    }
}