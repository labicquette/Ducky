import React from "react";

export class FollowsViewList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            onglet: 1
        };
    }

    render() {
        return (
            <div className='follows-view-list-container'>
                <div className='follows-view-list-titles-bar'>
                    <div 
                    className={
                        'follows-view-list-title' + (
                        (this.state.onglet == 1) ? ' follows-view-list-title-select': '')
                    }>
                        <span className='follows-view-list-title-value'>25</span>
                        <span className='follows-view-list-title-name'>Abonnés</span>
                    </div>
                    <div 
                    className={
                        'follows-view-list-title' + (
                        (this.state.onglet == 2) ? ' follows-view-list-title-select': '')
                    }>    
                        <span className='follows-view-list-title-value'>12</span>
                        <span className='follows-view-list-title-name'>Abonnements</span>
                    </div>
                </div>
                <div className='follows-view-list-content'>

                </div>
            </div>
        );
    }
}