import React from "react";
import { MainPageContentHome } from "./MainPageContentHome";
import { MainPageContentMessages } from "./MainPageContentMessages";
import { MainPageContentStories } from "./MainPageContentStories";

export class MainPageContent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let content = null;
        switch(this.props.contentId) {
            case 1: // messages
                content = (
                    <MainPageContentMessages />
                );
                break;
            case 2: // stories
                content = (
                    <MainPageContentStories />
                );
            default:
                content = (
                    <MainPageContentHome />
                );
        }
        return (
            <div className='main-page-content'>
                {content}
            </div>
        );
    }
}