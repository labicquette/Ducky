import React from "react";
import { UserServices } from "../../../model/services/UserServices";

export class FollowerViewItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            active: this.props.active,
            delete: false,
        };
    }

    render() {
        return (
            <div className='follow-view-item-container'>
                <img
                    src={this.props.follower.profil_picture_src}
                    className='follow-view-item-image'
                    alt={this.props.follower.names} 
                    onClick={() => this.props.handleSetOtherUser()}/>
                <div 
                    className='follow-view-item-names'
                    onClick={() => this.props.handleSetOtherUser()}>
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
                            (!this.state.active) ? 
                            'follow-view-item-action-item follow-view-item-action-item-negative' : 
                            'follow-view-item-action-item follow-view-item-action-item-positive'
                        }
                        type='button'
                        value={(!this.state.active) ? "S'abonner" : "Abonné(e)"} 
                        onClick={() => {
                            let active = !this.state.active;
                            if (!this.state.active) {
                                UserServices.addFollowing(
                                    this.props.user.id,
                                    this.props.follower.id,
                                    (response) => {
                                        if (response.status === 200) {
                                            this.setState({active: active});
                                        }
                                        else {
                                            console.log(response);
                                        }
                                    },
                                    (error) => {
                                    }
                                );
                            }
                            else {
                                UserServices.delFollowing(
                                    this.props.user.id,
                                    this.props.follower.id,
                                    (response) => {
                                        if (response.status === 200) {
                                            this.setState({active: active});
                                        }
                                        else {
                                            console.log(response);
                                        }
                                    },
                                    (error) => {
                                    }
                                );
                            }
                            this.setState({active: active});
                        }}/>
                    <input
                        className={ 
                            'follow-view-item-action-item follow-view-item-action-item-red'
                        }
                        type='button'
                        value={(!this.state.delete) ? 'Supprimer' : 'Supprimé(e)'} 
                        onClick={() => {
                            if (!this.state.delete) {
                                UserServices.delFollower(
                                    this.props.user.id,
                                    this.props.follower.id,
                                    (response) => {
                                        this.setState({delete: true});
                                    },
                                    (error) => {
                                        //console.log(error);
                                    }
                                );
                            }
                        }}/>
                </div>
            </div>
        );
    }
}