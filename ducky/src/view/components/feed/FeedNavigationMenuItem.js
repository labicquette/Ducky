import React from "react";

export class FeedNavigationMenuItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='feed-navigation-menu-item'>
                <input 
                    className='feed-navigation-menu-item-image'
                    type='image'
                    src={this.props.src}
                    onClick={this.props.onClick} /> 
                <div className='feed-navigation-menu-item-titles'>  
                    <h3 
                        className='feed-navigation-menu-item-title'>
                        {this.props.title}
                    </h3>     
                    <h4
                        className='feed-navigation-menu-item-subtitle'>
                        {this.props.subtitle}
                    </h4>  
                </div>      
            </div>
        ); 
    }
}