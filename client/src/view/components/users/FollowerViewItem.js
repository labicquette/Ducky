import React from "react";

export class FollowerViewItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            active: true,
        };
    }

    render() {
        return (
            <div className='follow-view-item-container'>
                <img
                    src={this.props.follower.profil_picture_src}
                    className='follow-view-item-image'
                    alt={this.props.follower.names} />
                <div className='follow-view-item-names'>
                    <span className='follow-view-item-names-names'>
                        {this.props.follower.names}
                    </span>
                    <span className='follow-view-item-names-username'>
                        {this.props.follower.username}
                    </span>
                </div>
                <div className='follow-view-item-actions'>
                    <input
                        className={
                            (this.props.active) ? 
                            'follow-view-item-action-item follow-view-item-action-item-negative' : 
                            'follow-view-item-action-item follow-view-item-action-item-positive'
                        }
                        type='button'
                        value={(this.props.active) ? "S'abonner" : "Abonné(e)"} 
                        onClick={() => {alert(this.state.active)}}/>
                </div>
                <div className='follow-view-item-menu-container'>
                    <span>...</span>
                    <div className='follow-view-item-menu-content'>
                        <div 
                            className='follow-view-item-menu-item'
                            onClick={() => {alert('Supprimer')}}>
                            <span>Supprimer</span>
                        </div>
                        <div 
                            className='follow-view-item-menu-item'
                            onClick={() => {alert('Signaler')}}>
                            <span>Signaler</span>
                        </div>
                        <div 
                            className='follow-view-item-menu-item'
                            onClick={() => {alert('Bloquer')}}>
                            <span>Bloquer</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}