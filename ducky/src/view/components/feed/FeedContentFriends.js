import React from "react";

export class FeedContentFriends extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            onglet: 1
        };
    }

    render() {
        let content 

        return (
            <div className='feed-content-item feed-content-friends'> 
                <div className='feed-content-item-top'>
                    <h3>Abonnements et Abonnés</h3>
                </div>
                <div className='feed-'>

                </div>
            </div>
        );
    }
}