import React from "react";

export class PostEditor extends React.Component {

    render() {
        return (
            <div className='post-editor-container'>
                <div className='post-editor-text-container'>
                    <textarea 
                        className='post-editor-text'
                        rows={50}
                        cols={30}
                        wrap='hard'
                        >
                    </textarea>
                </div>
                <div className='post-editor-actions-bar'>
                    <div className='post-editor-action'>
                        <span>Image</span>
                    </div>
                    <div className='post-editor-action'>
                        <span>Vidéo</span>
                    </div>
                    <div className='post-editor-action'>
                        <span>Audio</span>
                    </div>
                    <div className='post-editor-action'>
                        <span>Localisation</span>
                    </div>
                    <div className='post-editor-action'>
                        <span>Sondage</span>
                    </div>
                    <div className='post-editor-action'>
                        <span>Publier</span>
                    </div>
                </div>
            </div>
        );
    }

}