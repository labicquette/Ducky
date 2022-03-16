import React from "react";
import { SignUp } from "./view/components/SignUp";
import { SignIn } from "./view/components/SignIn";
import User from "./model/objects/users/User";
import { SignForgotPassword } from "./view/components/SignInForgotPassword";

export default class App extends React.Component {

	constructor(props) {
		super(props);
		
		this.state = {
			mode: 0,
			connected: false,
			user: new User()
		};

		this.forgotPassword.bind(this);
		this.setMode.bind(this);
		this.signIn.bind(this);
	}

	signIn(username, password) {
		alert(username + ' ' + password);
	}

	signUp(user) {

	}

	setMode(mode) {
		this.setState({mode: mode});
	}

	handleSignChangeMode() {
		this.setState({mode: (this.state.mode == 'signin') ? 'signup': 'signin'});
	}

	forgotPassword(username) {
		// forgot password gestion
		this.setMode(2);
	}

	render() {
		let content;
		if (!this.state.connected) {
			let subcontent;
			switch (this.state.mode) {
				case 1: // sign up
					subcontent = (
						<SignUp
							signUp={this.signUp}
							handleSignIn={() => this.setMode(0)} 
						/>
					);
					break;
				case 2: // forgot password
					subcontent = (
						<SignForgotPassword
							handleSignIn={() => this.setMode(0)}
							handleSignUp={() => this.setMode(1)}
						/>
					);
					break;
				default:
					subcontent = (
						<SignIn 
							username={this.state.user.username} 
							signIn={this.signIn}
							forgotPassword={(username) => this.forgotPassword(username)}
							handleSignUp={() => this.setMode(1)}
						/>
					);
			}
			content = (
				<div className='sign-page-root'>
					{subcontent}
				</div>
			);
		}
		else {
			content = (
				<h1>Bienvenue sur Ducky !</h1>
			);
		}

		return content;
  	}
}
