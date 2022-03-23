import React from "react";
import { MainPageHeaderNavigationBarItem } from "./MainPageHeaderNavigationBarItem";

export class MainPageHeaderNavigationBar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='main-page-header-navigation-bar'>
                <MainPageHeaderNavigationBarItem
                    src=''
                    onClick={() => this.props.onClickHome()} />
                <MainPageHeaderNavigationBarItem
                    src=''
                    onClick={() => this.props.onClickFriends()} />
                <MainPageHeaderNavigationBarItem
                    src=''
                    onClick={() => this.props.onClickMessages()} />
                <MainPageHeaderNavigationBarItem
                    src=''
                    onClick={() => this.props.onClickNotifications()} />
                <MainPageHeaderNavigationBarItem
                    src=''
                    onClick={() => this.props.onClickProfil()} />  
                <MainPageHeaderNavigationBarItem
                    src=''
                    onClick={() => this.props.onClickMore()} />      
            </div>
        );
    }
}