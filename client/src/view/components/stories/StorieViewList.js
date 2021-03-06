import React from "react";
import { StorieView } from "./StorieView";

export class StorieViewList extends React.Component {

    render() {
        return (
            <div className='storie-view-list-container'>
                {this.props.stories.map(storie => <StorieView storie={storie} />)}
            </div>
        );
    }
}