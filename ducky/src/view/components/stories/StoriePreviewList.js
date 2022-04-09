import React from "react";
import { StoriePreview } from "./StoriePreview";

export class StoriePreviewList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='storie-preview-list-container'>
                <div className='storie-preview-list'>
                    <div className='storie-preview-container'>
                        <div className='storie-preview-content'>
                            <img
                                src={this.props.user.profil_picture_src} />
                        </div>
                        <div className='storie-preview-title'>
                            <span>Créer une nouvelle storie</span>
                        </div>
                    </div>
                    {this.props.stories.map(storie => <StoriePreview storie={storie} />)}
                </div>
            </div>
        );
    }
}