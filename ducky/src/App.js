import React from "react";
import { User } from "./model/objects/User";
import { SignUp } from "./view/components/sign/SignUp";
import { SignIn } from "./view/components/sign/SignIn";
import { SignForgotPassword } from "./view/components/sign/SignInForgotPassword";
import { Feed } from "./view/components/feed/Feed";
import axios from "axios";


export default class App extends React.Component {

	constructor(props) {
		super(props);
		
		this.state = {
			mode: 0,
			connected: false,
			user: new User(),
		};

		this.forgotPassword.bind(this);
		this.setMode.bind(this);
		this.setUser.bind(this);
		this.handleLogOut.bind(this);
	}

	setUser(user) {
		console.log(user);
		this.setState({ user: user, connected: true });
	}

	setMode(mode) {
		this.setState({mode: mode});
	}

	handleSignChangeMode() {
		this.setState({mode: (this.state.mode === 0) ? 1: 0});
	}

	forgotPassword(username) {
		// forgot password gestion
		this.setMode(2);
	}

	handleLogOut() {
		this.setState({ connected: false })
	}

	render() {
		let content;
		if (!this.state.connected) {
			let subcontent;
			switch (this.state.mode) {
				case 1: // sign up
					subcontent = (
						<SignUp
							setUser={(user) => this.setUser(user)}
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
				default: // sign in
					subcontent = (
						<SignIn 
							username={this.state.user.username} 
							setUser={(user) => this.setUser(user)}
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
				<div className='feed'>
					<Feed 
						user={this.state.user} 
						handleLogOut={() => this.handleLogOut()}/>
				</div>
			);
		}

		return content;
  	}
}
