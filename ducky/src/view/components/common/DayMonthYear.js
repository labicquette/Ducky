import React from "react";

export default class DayMonthYear extends React.Component {

    render() {
        let range;

        range = [];
        for (let i=1; i <= 31; i++) range.push(i);
        let days = range.map((i) => <option value={i}>{i}</option>);

        range = [];
        for (let i=1; i <= 12; i++) range.push(i);
        let months = range.map((i) => <option value={i}>{i}</option>);

        range = [];
        let currentYear = new Date().getFullYear();
        for (let i=1901; i <= currentYear; i++) range.push(i);
        let years = range.map((i) => <option value={i}>{i}</option>);

        return (
            <div className='selects-group'>
                <label className='select-label'>
                    Jour :
                    <select
                        value={this.props.date.getDate()}
                        onChange={(e) => this.props.handleChange(e, 'day')}
                        className='select-item'>
                        {days}
                    </select>
                </label>
                <label className='select-label'>
                    Mois :
                    <select
                        value={this.props.date.getMonth() + 1}
                        onChange={(e) => this.props.handleChange(e, 'month')}
                        className='select-item'>
                        {months}
                    </select>
                </label>
                <label className='select-label'>
                    Année :
                    <select
                        value={this.props.date.getFullYear()}
                        onChange={(e) => this.props.handleChange(e, 'year')}
                        className='select-item'>
                        {years}
                    </select>
                </label>               
            </div>
        );
    }
}