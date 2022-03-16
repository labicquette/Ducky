import React from "react";
import { UserSex } from "../../model/objects/users/User";

export default class Sex extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let sex = [];
        for (const [key, value] of Object.entries(UserSex)) {
            sex.push(<option value={key}>{value}</option>)
        }

        return (
            <div className='selects-group'>
                <label className='select-label'>
                    Sexe : 
                    <select
                        value={this.props.sex}
                        onChange={(e) => this.props.handleChange(e)}
                        className='select-item'>
                        {sex}
                    </select>
                </label>
            </div>
        );
    }
}