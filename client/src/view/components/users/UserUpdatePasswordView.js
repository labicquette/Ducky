import React from "react";
import { User } from "../../../model/objects/User";
import { UserServices } from "../../../model/services/UserServices";

export class UserUpdatePasswordView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            lastpassword: '',
            newpassword: '',
            confirmnewpassword: '',
            errorMessage: '',
        };
    }

    render() {
        let errorContent = null;
        if (this.state.errorMessage) {
            errorContent = (
                <div className='user-update-profil-view-error'>
                    {this.state.errorMessage}
                </div>
            );
        }

        return (
            <div className='user-update-profil-view-container'>
                <div className='user-update-profil-view-title'>
                    <h3>Changer le mot de passe</h3>
                </div>
                <div className='user-update-profil-view-content'>
                    <div className='user-update-profil-view-content-item'>
                        <label
                            className='user-update-profil-view-content-item-label'
                            htmlFor='lastpassword'>
                            Ancien mot de passe
                        </label>
                        <input
                            className='user-update-profil-view-content-item-text'
                            type='password'
                            name='lastpassword'
                            id='lastpassword'
                            value={this.state.lastpassword}
                            onChange={(e) => {this.setState({lastpassword: e.target.value})}} />
                    </div>
                    <div className='user-update-profil-view-content-item'>
                        <label
                            className='user-update-profil-view-content-item-label'
                            htmlFor='newpassword'>
                            Nouveau mot de passe
                        </label>
                        <input
                            className='user-update-profil-view-content-item-text'
                            type='password'
                            name='newpassword'
                            id='newpassword' 
                            value={this.state.newpassword}
                            onChange={(e) => {this.setState({newpassword: e.target.value})}} />
                    </div>
                    <div className='user-update-profil-view-content-item'>
                        <label
                            className='user-update-profil-view-content-item-label'
                            htmlFor='confirmpassword'>
                            Confirmer le nouveau mot de passe
                        </label>
                        <input
                            className='user-update-profil-view-content-item-text'
                            type='password'
                            name='confirmpassword'
                            id='confirmpassword'
                            value={this.state.confirmnewpassword}
                            onChange={(e) => {this.setState({confirmnewpassword: e.target.value})}} />
                    </div>
                </div>
                {errorContent}
                <div className='user-update-profil-view-buttons'>
                    <input
                        className='user-update-profil-view-button' 
                        type='button'
                        value='Sauvegarder'
                        onClick={
                            () => {
                                if (this.state.newpassword !== this.state.confirmnewpassword) {
                                    this.setState({errorMessage: 'Les nouveaux mots de passe ne correspondent pas !'});
                                    return;
                                }
                                if (this.state.lastpassword !== this.props.user.password) {
                                    this.setState({errorMessage: 'Mot de passe incorrect'});
                                    return;
                                }
                                let user = new User();
                                user.id = this.props.user.id;
                                user.password = this.state.newpassword;
                                UserServices.updateUser(user, 
                                    (response) => {
                                        this.props.handleProfil();
                                    },
                                    (error) => {
                                        this.setState({errorMessage: error.message});
                                        console.log(error);
                                    }
                                );
                            }
                        } />
                    <input
                        className='user-update-profil-view-button' 
                        type='button'
                        value='Annuler'
                        onClick={this.props.handleProfil} />
                </div>
            </div>
        );
    }
}