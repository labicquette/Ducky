import React from "react";
import { StoriePreview2 } from "./StoriePreview2";

export class StoriePreviewList2 extends React.Component {

    render() {
        return (
            <div className='stories-preview2-list-container'>
                <div className='stories-preview2-list-title'>
                    <h3>Stories</h3>
                </div>
                <div className='stories-preview2-list-content'>
                    {
                        this.props.storiesList.map(
                            stories => <StoriePreview2 stories={stories} />
                        )
                    }
                </div>
            </div>
        );
    }
}