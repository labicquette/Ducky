import React from "react";
import { UserServices } from "../../../model/services/UserServices";

export class FollowingViewItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            active: this.props.active,
        };
    }

    render() {
        return (
            <div className='follow-view-item-container'>
                <img
                    src={this.props.following.profil_picture_src}
                    className='follow-view-item-image'
                    alt={this.props.following.names} />
                <div className='follow-view-item-names'>
                    <span className='follow-view-item-names-names'>
                        {this.props.following.names}
                    </span>
                    <span className='follow-view-item-names-username'>
                        {this.props.following.username}
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
                                    this.props.following.id,
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
                                    this.props.following.id,
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
                </div>
            </div>
        );
    }
}