import React from "react";

export class UserUpdateStatusView extends React.Component {

    render() {
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
                                    for='private'>
                                    Compte privé
                                </label>
                            </div>
                            <div className='user-update-profil-view-content-item2-info'>
                                Vos publications et vos stories ne seront visibles que par vos abonnés.
                            </div>
                        </div>
                    </div>
                    <div className='user-update-profil-view-content-item2'>
                        <h4
                            className='user-update-profil-view-content-item2-title'>
                            Désactiver temporairement le compte
                        </h4>
                        <div className='user-update-profil-view-content-item2-container'>
                            <div className='user-update-profil-view-content-item2-info'>
                                Vous pouvez désactiver votre compte au lieu de le supprimer. <br />
                                Votre compte sera masqué jusqu’à ce que vous le réactiviez
                                en vous reconnectant.  <br />
                            </div>
                            <div className='user-update-profil-view-content-item'>
                                <label
                                    className='user-update-profil-view-content-item-label'
                                    for='password'>
                                    Mot de passe
                                </label>
                                <input
                                    className='user-update-profil-view-content-item-text'
                                    type='password'
                                    name='password'
                                    id='password' />
                            </div>
                            <input 
                                className='user-update-profil-view-button'
                                type='button'
                                value='Désactiver temporairement le compte' />
                        </div>
                    </div>
                    <div className='user-update-profil-view-content-item2'>
                        <h4
                            className='user-update-profil-view-content-item2-title'>
                            Supprimer définitivement le compte
                        </h4>
                        <div className='user-update-profil-view-content-item2-container'>
                            <div className='user-update-profil-view-content-item2-info'>
                                Vous pouvez désactiver votre compte au lieu de le supprimer. <br />
                                Votre compte sera masqué jusqu’à ce que vous le réactiviez
                                en vous reconnectant.  <br />
                            </div>
                            <div className='user-update-profil-view-content-item'>
                                <label
                                    className='user-update-profil-view-content-item-label'
                                    for='password'>
                                    Mot de passe
                                </label>
                                <input
                                    className='user-update-profil-view-content-item-text'
                                    type='password'
                                    name='password'
                                    id='password' />
                            </div>
                            <input 
                                className='user-update-profil-view-button'
                                type='button'
                                value='Supprimer définitivement le compte' />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}