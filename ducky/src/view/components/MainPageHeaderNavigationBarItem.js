import React from "react";

export class MainPageHeaderNavigationBarItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='main-page-header-navigation-bar-item'>
                <input 
                    className='main-page-header-navigation-bar-item-image'
                    type='image'
                    src={this.props.src}
                    onClick={this.props.onClick} />                
            </div>
        ); 
    }
}