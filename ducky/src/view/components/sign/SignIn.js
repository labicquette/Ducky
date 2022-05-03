import React from 'react';
import { UserServices } from '../../../model/services/UserServices';
import { SignTop } from './SignTop';
import Cookies from 'js-cookie';

export class SignIn extends React.Component {
        
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            errorMessage: ''
        };
    }

    render() {
        let errorContent = null;
        if (this.state.errorMessage) {
            errorContent = (
                <div className='sign-error-message'>
                    {this.state.errorMessage}
                </div>
            );
        }

        return (
            <div className='sign'>
                <SignTop title='Nous sommes très heureux de vous revoir !' />
                <div className='sign-content'>
                    <h3>Tout se passe sur Ducky !</h3>
                    <div className='form-sign-input-label'>
                        <label
                            htmlFor='username'
                            className='form-sign-label' >
                            Nom d'utilisateur
                        </label>
                        <input
                            type='text'
                            id='username'
                            name='username'
                            placeholder="Nom d'utilisateur, email ou téléphone"
                            onChange={(e) => {
                                e.preventDefault();
                                this.setState({username: e.target.value.trim()});
                            }}
                            className='form-sign-input-text'
                            />
                    </div>
                    <div className='form-sign-input-label'>
                        <label
                            htmlFor='password'
                            className='form-sign-label' >
                            Mot de passe
                        </label>
                        <input
                            type='password'
                            id='password'
                            name='password'
                            placeholder='Mot de passe'
                            onChange={(e) => {
                                e.preventDefault();
                                this.setState({password: e.target.value});
                            }}
                            className='form-sign-input-text'
                        />
                    </div>
                </div>
                {errorContent}
                <div className='sign-button-bar'>
                    <input
                        type='button'
                        value='Mot de passe oublié'
                        className='form-sign-button negative'
                        onClick={(e) => {
                            e.preventDefault();
                            if (!this.state.username) {
                                this.setState({errorMessage:
                                    "Veuillez entrer votre nom d'utilisateur !"
                                });
                                return;
                            }
                            this.setState({errorMessage: ''});
                            this.props.forgotPassword(this.state.username);
                        }}
                        />
                    <input
                        type='button'
                        value='Se connecter'
                        className='form-sign-button positive'
                        onClick={(e) => {
                            e.preventDefault();
                            if (!this.state.username || !this.state.password) {
                                this.setState({errorMessage: 
                                    "Veuillez entrer votre nom d'utilisateur et votre mot de "+
                                    "passe !"
                                });
                                return;
                            }
                            this.setState({errorMessage: ''});
                            UserServices.login(this.state.username, this.state.password,
                                (response) => {
                                    if (response.status === 200) {
                                        const user_id = Cookies.get('user_id');
                                        this.props.setUser(user_id);
                                    }
                                    else {
                                        const errorMessage = response.data;
                                        this.setState({errorMessage: errorMessage});
                                    }
                                },
                                (error) => {
                                    const errorMessage = error.message;
                                    this.setState({errorMessage: errorMessage});
                                }
                            );
                        }}
                        />
                </div>
                <div className='sign-type-swipe-question'>
                    <p>Vous n'avez pas encore de compte ? </p> 
                    <input
                        type='button'
                        value='Inscrivez-vous'
                        className='form-sign-button negative'
                        onClick={this.props.handleSignUp}
                        />                  
                </div>
            </div>
        );
    }

}