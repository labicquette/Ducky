import React from 'react';
import { Logo } from './'

/**
 * Connexion utilisateur
 */
export class SignIn extends React.Component {
    render() {
        return (
            <div class="sign-block">
                <Logo />
                <h1>Se connecter à Ducky</h1>
                <form className="form connexion" action="index.html" method="post">
                    <div class="text-label">
                        <label for="username">Nom d'utilisateur</label>
                        <input type="text" name="username" id="username"/>
                    </div>
                    <div class="text-label">
                        <label for="password">Mot de passe</label>
                        <input type="password" name="password" id="password"/>
                    </div>
                    <div class="text-button">
                        <input type="submit" name="connexion" id="connexion" value="Se connecter"/>
                        <p><a href="#">Mot de passe oublié</a></p>
                    </div>
                </form>
                <div>
                    <p>Vous n'avez pas de compte ? <a href="#" class="link-yellow">Inscrivez-vous</a> !</p>
                </div>
            </div>
        );
    }
}
