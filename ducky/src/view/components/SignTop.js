import React from "react";

export class SignTop extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='sign-top'>
                <img
                    src={require('../../ressources/ducky.png')}
                    className='sign-logo'
                    alt='Ducky'
                    title='Ducky'
                />
                <h2>{this.props.title}</h2>
            </div>
        );
    }

}