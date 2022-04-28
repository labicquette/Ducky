import React from "react";

export class SignUpBirthdaySex extends React.Component {

    render() {
        return (
            <div className='sign-content'>
                <h3>Dites-nous un peu plus sur vous ! (2/5)</h3>
                <div className='form-sign-input-label'>
                    <label
                        htmlFor='birthday'
                        className='form-sign-label' >
                        Date de naissance
                    </label>
                    <input
                        type='date'
                        id='birthday'
                        name='birthday'
                        value={this.props.birthday}
                        onChange={e => {this.props.handleChange(e, 'birthday')}}
                        className='form-sign-input-text'
                    />
                </div>
                <div className='form-sign-input-label'>
                    <label
                        htmlFor='sex'
                        className='form-sign-label' >
                        Sexe
                    </label>
                    <input
                        type='text'
                        id='sex'
                        name='sex'
                        value={this.props.sex}
                        onChange={e => {this.props.handleChange(e, 'sex')}}
                        className='form-sign-input-text'
                    />
                </div>
            </div>
        );
    }

}



