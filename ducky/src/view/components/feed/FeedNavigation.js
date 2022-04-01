import React from "react";
import { FeedNavigationMenuItem } from "./FeedNavigationMenuItem";

export class FeedNavigation extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='feed-navigation'>
                <div className='feed-navigation-top'>
                    <div className='feed-navigation-logo'>         
                        <img 
                            type='button'
                            src={require('../../../ressources/ducky.png')} 
                            alt='Ducky' 
                            title='Ducky'
                            />
                    </div>   
                </div>
                <div className='feed-navigation-menu'>                    
                    <FeedNavigationMenuItem
                        title='Accueil'
                        subtitle="Fil d'actualité"
                        src={require('../../../ressources/icons/home.png')} 
                        onClick={() => this.props.onClickHome()} />
                    <FeedNavigationMenuItem
                        title='Explorer'
                        subtitle="Rechercher dans Ducky"
                        src={require('../../../ressources/icons/search.png')} 
                        onClick={() => this.props.onClickHome()} />
                    <FeedNavigationMenuItem
                        title='Ben Kabongo'
                        subtitle='@benkabongo25'
                        src={require('../../../ressources/icons/profil.png')} 
                        onClick={() => this.props.onClickHome()} />
                    <FeedNavigationMenuItem
                        title='Abonnés et abonnements'
                        subtitle='0 suggestions'
                        src={require('../../../ressources/icons/friends.png')}
                        onClick={() => this.props.onClickFriends()} />
                    <FeedNavigationMenuItem
                        title='Messages'
                        subtitle='Aucun nouveau message'
                        src={require('../../../ressources/icons/message.png')}
                        onClick={() => this.props.onClickMessages()} />
                    <FeedNavigationMenuItem
                        title='Notifications'
                        subtitle='Aucune nouvelle notification'
                        src={require('../../../ressources/icons/notification.png')}
                        onClick={() => this.props.onClickNotifications()} />
                    <FeedNavigationMenuItem
                        title='Statistiques'
                        subtitle='Visualisez vos stastiques'
                        src={require('../../../ressources/icons/statistics.png')}
                        onClick={() => this.props.onClickNotifications()} />
                    <FeedNavigationMenuItem
                        title='Paramètres'
                        subtitle='Modifiez vos paramètres'
                        src={require('../../../ressources/icons/parameters.png')}
                        onClick={() => this.props.onClickNotifications()} />
                    <FeedNavigationMenuItem
                        title='Plus'
                        subtitle=''
                        src={require('../../../ressources/icons/more.png')}
                        onClick={() => this.props.onClickMore()} />
                </div>
                <div className='feed-navigation-actions-bar'>
                    <div className='feed-navigation-action'>
                        
                            
                    </div>
                </div>               
            </div>
        );
    }
}