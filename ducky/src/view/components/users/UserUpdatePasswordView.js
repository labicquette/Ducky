import React from "react";

export class UserUpdatePasswordView extends React.Component {

    render() {
        return (
            <div className='user-update-profil-view-container'>
                <div className='user-update-profil-view-title'>
                    <h3>Changer le mot de passe</h3>
                </div>
                <div className='user-update-profil-view-content'>
                    <div className='user-update-profil-view-content-item'>
                        <label
                            className='user-update-profil-view-content-item-label'
                            for='lastpassword'>
                            Ancien mot de passe
                        </label>
                        <input
                            className='user-update-profil-view-content-item-text'
                            type='password'
                            name='lastpassword'
                            id='lastpassword' />
                    </div>
                    <div className='user-update-profil-view-content-item'>
                        <label
                            className='user-update-profil-view-content-item-label'
                            for='newpassword'>
                            Nouveau mot de passe
                        </label>
                        <input
                            className='user-update-profil-view-content-item-text'
                            type='password'
                            name='newpassword'
                            id='newpassword' />
                    </div>
                    <div className='user-update-profil-view-content-item'>
                        <label
                            className='user-update-profil-view-content-item-label'
                            for='confirmpassword'>
                            Confirmer le nouveau mot de passe
                        </label>
                        <input
                            className='user-update-profil-view-content-item-text'
                            type='password'
                            name='confirmpassword'
                            id='confirmpassword' />
                    </div>
                </div>
                <div className='user-update-profil-view-buttons'>
                    <input
                        className='user-update-profil-view-button' 
                        type='button'
                        value='Sauvegarder' />
                    <input
                        className='user-update-profil-view-button' 
                        type='button'
                        value='Annuler' />
                </div>
            </div>
        );
    }
}