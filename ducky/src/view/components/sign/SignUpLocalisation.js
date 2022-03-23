import React from "react";
import CountrySelect from "../common/CountrySelect";

export default class SingUpLocalisation extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class='sign-content'>
                <h3>D'où réjoignez-vous notre communauté ? (3/5)</h3>
                <div className='form-sign-input-label'>
                    <label className='form-sign-label'>Pays</label>
                    <CountrySelect 
                        country={this.props.country} 
                        handleChange={e => {this.props.handleChange(e, 'country')}} />
                </div>
                <div className='form-sign-input-label'>
                    <label
                        for='city'
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