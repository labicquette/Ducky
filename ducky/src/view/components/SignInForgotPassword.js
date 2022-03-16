import React from 'react';
import { SignTop } from './SignTop';

export class SignForgotPassword extends React.Component {
        
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='sign'>
                <SignTop title='Mot de passe oublié ? Pas de panique !' />
                <div className='sign-content'>
                    <h3>Récupération de votre mot de passe</h3>
                    <p className='sign-error-message'>
                        Lisez votre messagerie !<br/><br/>
                        
                        Un lien de récupération de votre mot de passe vous a été envoyé sur
                        votre boite mail ou par message.<br/><br/>

                        Si vous ne le retrouvez pas, regardez bien vos spams.
                    </p>
                </div>    
                <div className='sign-button-bar'>
                    <input
                        type='button'
                        value="S'inscrire"
                        className='form-sign-button negative'
                        onClick={(e) => {this.props.handleSignUp()}}
                        />
                    <input
                        type='button'
                        value='Se connecter'
                        className='form-sign-button positive'
                        onClick={(e) => {this.props.handleSignIn()}}
                        />
                </div>
            </div>
        );
    }

}