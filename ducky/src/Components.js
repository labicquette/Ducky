/**
 * Technologies Web - LU3IN017
 * Sorbonne Université
 * 
 * @author: Ben Kabongo & Théo Charlot
 * Février 2022
 * 
 * Composants
 */


 import React from 'react';

 import { User } from './model';






/**
 * Composant d'inscription
 */
class SignUp extends React.Component {
    render() {
        return (
            <div class="sign-block">
                <Logo />
                <h1>Réjoignez Ducky !</h1>
                <form class="form connexion" action="index.html" method="post">
                    <div class="text-label">
                        <label for="firstname">Prénom</label>
                        <input type="text" name="firstname" id="firstname"/>
                    </div>
                    <div class="text-label">
                        <label for="lastname">Nom</label>
                        <input type="text" name="lastname" id="lastname"/>
                    </div>
                    <div class="text-label">
                        <label for="username">Nom d'utilisateur</label>
                        <input type="text" name="username" id="username"/>
                    </div>
                    <div class="text-label">
                        <label for="password">Mot de passe</label>
                        <input type="password" name="password" id="password"/>
                    </div>
                    <div class="text-label">
                        <label for="confirmpassword">Confirmer le mot de passe</label>
                        <input type="confirmpassword" name="confirmpassword" id="confirmpassword"/>
                    </div>
                </form>
                <div>
                    <p>Vous avez déjà un compte ? <a href="#" class="link-yellow">Connectez-vous</a> !</p>
                </div>
            </div>
        );
    }
}


/**
 * Photo de profil utilisateur
 */
class UserProfilePicture extends React.Component {

    /**
     * @param propos: propriétés
     *        - src: source de la photo
     *        - user: référence utilisateur
     */
    constructor(props) {
        super(props);
        this.user = props.user;
        if (this.user){

        }
    }

    render() {
        return (
            <div>
                <img src={this.props.src} alt={this.props.user.username} title={this.user.username} />
            </div>
        );
    }
}


export default Components;
