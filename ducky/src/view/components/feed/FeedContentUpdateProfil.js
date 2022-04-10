import React from "react";
import { UserUpdatePasswordView } from "../users/UserUpdatePasswordView";
import { UserUpdateProfilView } from "../users/UserUpdateProfilView";
import { UserUpdateStatusView } from "../users/UserUpdateStatusView";

export class FeedContentUpdateProfil extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            page: 0,
        };
    }

    render() {
        let content = null;
        switch(this.state.page) {
            case 1: // update password
                content = (
                    <UserUpdatePasswordView user={this.props.user} />
                );
                break;

            case 2: // update status
                content = (
                    <UserUpdateStatusView user={this.props.user} />
                );
                break;

            case 3: // parameters
                break;

            case 4: // help
                break;

            default: // update profil
                content = (
                    <UserUpdateProfilView user={this.props.user} />
                );
        }

        return (
            <div className='feed-content-update-profil'>
                <div className='feed-content-update-profil-navigation'>
                    <a 
                        className='feed-content-update-profil-navigation-item'
                        href='#'
                        onClick={() => {this.setState({ page: 0 })}}>
                        Modifier le profil
                    </a>
                    <a 
                        className='feed-content-update-profil-navigation-item'
                        href='#'
                        onClick={() => {this.setState({ page: 1 })}}>
                        Mot de passe
                    </a>
                    <a 
                        className='feed-content-update-profil-navigation-item'
                        href='#'
                        onClick={() => {this.setState({ page: 2 })}}>
                        Status du compte
                    </a>
                    <a 
                        className='feed-content-update-profil-navigation-item'
                        href='#'
                        onClick={() => {this.setState({ page: 3 })}}>
                        Paramètres
                    </a>
                    <a 
                        className='feed-content-update-profil-navigation-item'
                        href='#'
                        onClick={() => {this.setState({ page: 4 })}}>
                        Aide
                    </a>
                </div>
                <div className='feed-content-update-profil-content'>
                    {content}
                </div>
            </div>
        );
    }
}