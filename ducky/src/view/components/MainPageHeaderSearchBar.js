import React from "react";

export class MainPageHeaderSearchBar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='main-page-header-search-bar'>
                <input
                    className='main-page-header-search-bar-input'
                    id='search'
                    name='search'
                    type='text'
                    placeholder='Rechercher'
                    onChange={(e) => this.props.handleChange(e)} />
            </div>
        );
    }

}