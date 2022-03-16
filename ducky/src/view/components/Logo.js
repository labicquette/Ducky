import React from 'react';

export default class Logo extends React.Component {
    render() {
        return (
            
            <img 
                src={require('../../ressources/ducky.png')} 
                alt='Ducky' 
                title='Ducky'
                style={{'width': '5%'}}
                />
        );
    }
}