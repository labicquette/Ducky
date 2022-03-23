import React from "react";
import Logo from "../common/Logo";
import { MainPageHeaderNavigationBar } from "./MainPageHeaderNavigationBar";
import { MainPageHeaderSearchBar } from "./MainPageHeaderSearchBar";

export class MainPageHeader extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='main-page-header'>
                <Logo />
                <MainPageHeaderSearchBar 
                    handleChange={(e) => this.props.handleSearchBarChange(e)} />
                <MainPageHeaderNavigationBar 
                    onClickHome={() => this.props.onClickHome()}
                    onClickFriends={() => this.props.onClickFriends()}
                    onClickMessages={() => this.props.onClickMessages()}
                    onClickNotifications={() => this.props.onClickNotifications()}
                    onClickProfil={() => this.props.onClickProfil()}
                    onClickMore={() => this.props.onClickMore()} />
            </div>
        );
    }
}