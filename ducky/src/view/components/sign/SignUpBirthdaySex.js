import React from "react";
import DayMonthYear from "../common/DayMonthYear";
import Sex from "../common/Sex";

export default class SignUpBirthdaySex extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class='sign-content'>
                <h3>Dites-nous un peu plus sur vous ! (2/5)</h3>
                <div className='form-sign-input-label'>
                    <p className='form-sign-label'>Date de naissance</p>
                    <DayMonthYear 
                        date={this.props.date} 
                        handleChange={(e, f) => this.props.handleChange(e, f)} />
                </div>
                <div className='form-sign-input-label'>
                    <p className='form-sign-label'>Votre genre</p>
                    <Sex
                        sex={this.props.sex} 
                        handleChange={(e) => this.props.handleChange(e, 'sex')} />
                </div>
            </div>
        );
    }

}



