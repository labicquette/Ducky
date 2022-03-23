import React from "react";

export default class SignUpContacts extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class='sign-content'>
                <h3>On veut pouvoir vous contacter ! (4/5)</h3>
                <div className='form-sign-input-label'>
                    <label
                        for='phone'
                        className='form-sign-label' >
                        Numéro de téléphone
                    </label>
                    <input
                        type='tel'
                        id='phone'
                        name='phone'
                        value={this.props.phone}
                        placeholder='ex: +33 6 00 00 00 00'
                        onChange={e => {this.props.handleChange(e, 'phone')}}
                        className='form-sign-input-text'
                        />
                </div>
                <div className='form-sign-input-label'>
                    <label
                        for='lastname'
                        className='form-sign-label' >
                        Nom
                    </label>
                    <input
                        type='mail'
                        id='mail'
                        name='mail'
                        value={this.props.mail}
                        placeholder='ex: jean.dupont@gmail.com'
                        onChange={e => {this.props.handleChange(e, 'mail')}}
                        className='form-sign-input-text'
                    />
                </div>
            </div>
        );
    }

}



