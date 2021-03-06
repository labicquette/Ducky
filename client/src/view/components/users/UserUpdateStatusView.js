import React from "react";
import { UserServices } from "../../../model/services/UserServices";

export class UserUpdateStatusView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            private: this.props.user.private,
            disablePassword: '',
            deletePassword: '',
            errorDisableMessage: '',
            errorDeleteMessage: ''
        };
    }

    render() {
        let errorDisableContent = null;
        if (this.state.errorDisableMessage) {
            errorDisableContent = (
                <div className='user-update-profil-view-error'>
                    {this.state.errorDisableMessage}
                </div>
            );
        }
        
        let errorDeleteContent = null;
        if (this.state.errorDeleteMessage) {
            errorDeleteContent = (
                <div className='user-update-profil-view-error'>
                    {this.state.errorDeleteMessage}
                </div>
            );
        }

        return (
            <div className='user-update-profil-view-container'>
                <div className='user-update-profil-view-title'>
                    <h3>Status du compte</h3>
                </div>
                <div className='user-update-profil-view-content'>
                    <div className='user-update-profil-view-content-item2'>
                        <h4
                            className='user-update-profil-view-content-item2-title'>
                            Type de compte
                        </h4>
                        <div className='user-update-profil-view-content-item2-container'>
                            <div>
                                <input
                                    className=''
                                    type='checkbox' 
                                    name='private'
                                    id='private' />
                                <label 
                                    className=''
                                    htmlFor='private'>
                                    Compte priv??
                                </label>
                            </div>
                            <div className='user-update-profil-view-content-item2-info'>
                                Vos publications et vos stories ne seront visibles que par vos abonn??s.
                            </div>
                        </div>
                    </div>
                    <div className='user-update-profil-view-content-item2'>
                        <h4
                            className='user-update-profil-view-content-item2-title'>
                            D??sactiver temporairement le compte
                        </h4>
                        <div className='user-update-profil-view-content-item2-container'>
                            <div className='user-update-profil-view-content-item2-info'>
                                Vous pouvez d??sactiver votre compte au lieu de le supprimer. <br />
                                Votre compte sera masqu?? jusqu????? ce que vous le r??activiez
                                en vous reconnectant.  <br />
                            </div>
                            <div className='user-update-profil-view-content-item'>
                                <label
                                    className='user-update-profil-view-content-item-label'
                                    htmlFor='disable-password'>
                                    Mot de passe
                                </label>
                                <input
                                    className='user-update-profil-view-content-item-text'
                                    type='password'
                                    name='disabled-password'
                                    id='disabled-password'
                                    value={this.state.disablePassword}
                                    onChange={(e) => {this.setState({disablePassword: e.target.value})}} />
                            </div>
                            {errorDisableContent}
                            <input 
                                className='user-update-profil-view-button'
                                type='button'
                                value='D??sactiver temporairement le compte'
                                onClick={() => {
                                    if (this.state.disablePassword !== this.props.user.password) {
                                        this.setState({errorDisableMessage: 'Mot de passe incorrect'});
                                        return;
                                    }
                                    this.setState({errorDisableMessage: 'Compte d??sactiv??'});
                                    this.props.handleLogOut();
                                }} />
                        </div>
                    </div>
                    <div className='user-update-profil-view-content-item2'>
                        <h4
                            className='user-update-profil-view-content-item2-title'>
                            Supprimer d??finitivement le compte
                        </h4>
                        <div className='user-update-profil-view-content-item2-container'>
                            <div className='user-update-profil-view-content-item2-info'>
                                Cette action est d??finitive. Vous perdrez votre compte ainsi
                                que toutes vos informations et liens d'amiti??.  <br />
                            </div>
                            <div className='user-update-profil-view-content-item'>
                                <label
                                    className='user-update-profil-view-content-item-label'
                                    htmlFor='password'>
                                    Mot de passe
                                </label>
                                <input
                                    className='user-update-profil-view-content-item-text'
                                    type='password'
                                    name='password'
                                    id='password'
                                    value={this.state.deletePassword}
                                    onChange={(e) => {this.setState({deletePassword: e.target.value})}} />
                            </div>
                            {errorDeleteContent}
                            <input 
                                className='user-update-profil-view-button'
                                type='button'
                                value='Supprimer d??finitivement le compte'
                                onClick={() => {
                                    if (this.state.deletePassword !== this.props.user.password) {
                                        this.setState({errorDeleteMessage: 'Mot de passe incorrect'});
                                        return;
                                    }
                                    this.setState({errorDeleteContent: 'Compte supprim??'});
                                    UserServices.deleteUser(this.props.user.id,
                                        (response) => {
                                            console.log(response);
                                        },
                                        (error) => {
                                            console.log(error);
                                        }
                                    );
                                    this.props.handleLogOut();
                                }} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}