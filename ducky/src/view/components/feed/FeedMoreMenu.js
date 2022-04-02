import React from "react";

export class FeedMoreMenu extends React.Component {

    render() {
        return (
            <div className='feed-more-menu'>
                <div className='feed-more-menu-item'>
                    <img
                        src={require('../../../ressources/icons/friends.png')}
                        className='feed-more-menu-item-image' />
                    <span>Suggestions</span>
                </div>
                <div className='feed-more-menu-item'>
                    <img
                        src={require('../../../ressources/icons/statistics.png')}
                        className='feed-more-menu-item-image' />
                    <span>Statistiques</span>
                </div>
                <div className='feed-more-menu-item'>
                    <img
                        src={require('../../../ressources/icons/parameters.png')}
                        className='feed-more-menu-item-image' />
                    <span>Paramètres</span>
                </div>
                <div className='feed-more-menu-item'>
                    <img
                        src={require('../../../ressources/icons/deconnexion.png')}
                        className='feed-more-menu-item-image' />
                    <span>Se déconnecter</span>
                </div>
            </div>
        );
    }
}