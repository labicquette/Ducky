import React from "react";
import { SignUp } from "./view/components/SignUp";
import { SignIn } from "./view/components/SignIn";
import User from "./model/objects/users/User";

export default class App extends React.Component {

	constructor(props) {
		super(props);
		
		this.state = {
			mode: 'signin',
			connected: false,
			user: new User()
		};

		this.handleSignChangeMode.bind(this);
		this.forgotPassword.bind(this);
		this.signIn.bind(this);
	}

	signIn(username, password) {
		alert(username + ' ' + password);
	}

	signUp(user) {

	}

	handleSignChangeMode() {
		this.setState({mode: (this.state.mode == 'signin') ? 'signup': 'signin'});
	}

	forgotPassword(username) {

	}

	render() {
		let content;
		if (!this.state.connected) {
			let subcontent;
			if (this.state.mode == 'signin')
				subcontent = (
					<SignIn 
						username={this.state.user.username} 
						signIn={this.signIn}
						forgotPassword={(username) => this.forgotPassword(username)}
						handleSignUp={() => this.handleSignChangeMode()}
					/>
				);
			else
				subcontent = (
					<SignUp
						signUp={this.signUp}
						handleSignIn={() => this.handleSignChangeMode()} 
					/>
				);
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
