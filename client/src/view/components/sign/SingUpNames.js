import React from "react";

export class SignUpNames extends React.Component {

    render() {
        return (
            <div className='sign-content'>
                <h3>Bienvenue ! Comment vous appelez-vous ? (1/5)</h3>
                <div className='form-sign-input-label'>
                    <label
                        htmlFor='firstname'
                        className='form-sign-label' >
                        Prénom
                    </label>
                    <input
                        type='text'
                        id='firstname'
                        name='firstname'
                        value={this.props.firstname}
                        placeholder='ex: Jean'
                        onChange={(e) => this.props.handleChange(e, 'firstname')}
                        className='form-sign-input-text'
                        />
                </div>
                <div className='form-sign-input-label'>
                    <label
                        htmlFor='lastname'
                        className='form-sign-label' >
                        Nom
                    </label>
                    <input
                        type='text'
                        id='lastname'
                        name='lastname'
                        value={this.props.lastname}
                        placeholder='ex: Dupont'
                        onChange={(e) => this.props.handleChange(e, 'lastname')}
                        className='form-sign-input-text'
                    />
                </div>
            </div>
        );
    }

}



