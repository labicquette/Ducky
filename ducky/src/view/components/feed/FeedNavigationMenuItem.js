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
                    <h4 
                        className='feed-navigation-menu-item-title'>
                        {this.props.title}
                    </h4>     
                    <h5
                        className='feed-navigation-menu-item-subtitle'>
                        {this.props.subtitle}
                    </h5>  
                </div>      
            </div>
        ); 
    }
}