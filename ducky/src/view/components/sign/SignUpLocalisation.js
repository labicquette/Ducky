import React from "react";

export class SingUpLocalisation extends React.Component {

    render() {
        return (
            <div className='sign-content'>
                <h3>D'où réjoignez-vous notre communauté ? (3/5)</h3>
                <div className='form-sign-input-label'>
                    <label
                        htmlFor='country'
                        className='form-sign-label' >
                        Pays
                    </label>
                    <input
                        type='text'
                        id='country'
                        name='country'
                        placeholder='ex: France'
                        value={this.props.country}
                        onChange={e => {this.props.handleChange(e, 'country')}}
                        className='form-sign-input-text'
                    />
                </div>
                <div className='form-sign-input-label'>
                    <label
                        htmlFor='city'
                        className='form-sign-label' >
                        Ville
                    </label>
                    <input
                        type='text'
                        id='city'
                        name='city'
                        placeholder='ex: Paris'
                        value={this.props.city}
                        onChange={e => {this.props.handleChange(e, 'city')}}
                        className='form-sign-input-text'
                    />
                </div>
            </div>
        );
    }

}