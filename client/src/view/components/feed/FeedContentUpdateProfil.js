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
                    <UserUpdatePasswordView 
                        user={this.props.user} 
                        handleSetUser={this.props.handleSetUser}
                        handleProfil={this.props.handleProfil} />
                );
                break;

            case 2: // update status
                content = (
                    <UserUpdateStatusView 
                        user={this.props.user}
                        handleSetUser={this.props.handleSetUser}
                        handleProfil={this.props.handleProfil}
                        handleLogOut={this.props.handleLogOut} />
                );
                break;

            case 3: // parameters
                content = (
                    <div>
                        <h3>Paramètres</h3>
                    </div>
                )
                break;

            case 4: // help
                content = (
                    <div>
                        <h3>Aide</h3>
                    </div>
                )
                break;

            default: // update profil
                content = (
                    <UserUpdateProfilView 
                        user={this.props.user}
                        handleSetUser={this.props.handleSetUser} 
                        handleProfil={this.props.handleProfil} />
                );
        }

        return (
            <div className='feed-content-update-profil'>
                <div className='feed-content-update-profil-navigation'>
                    <input 
                        className='feed-content-update-profil-navigation-item'
                        onClick={() => {this.setState({ page: 0 })}}
                        type='button'
                        value='Modifier le profil' />
                    <input 
                        className='feed-content-update-profil-navigation-item'
                        onClick={() => {this.setState({ page: 1 })}}
                        type='button'
                        value='Mot de passe' />
                    <input 
                        className='feed-content-update-profil-navigation-item'
                        onClick={() => {this.setState({ page: 2 })}}
                        type='button'
                        value='Status du compte' />
                    <input 
                        className='feed-content-update-profil-navigation-item'
                        onClick={() => {this.setState({ page: 3 })}}
                        type='button'
                        value='Paramètres' />
                    <input 
                        className='feed-content-update-profil-navigation-item'
                        onClick={() => {this.setState({ page: 4 })}}
                        type='button'
                        value='Aide' />
                </div>
                <div className='feed-content-update-profil-content'>
                    {content}
                </div>
            </div>
        );
    }
}