import React from "react";
import { PostEdit } from "../posts/PostEdit";
import { PostViewList } from "../posts/PostViewList";
import { StoriePreviewList } from "../stories/StoriePreviewList";

export class FeedContentHome extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='feed-content-item feed-content-home'>
                <div className='feed-content-home-left'>
                    <div className='feed-content-item-top'>
                        <h3>Fil d'actualité</h3>
                    </div>
                    <div className='feed-content-home-left-main'>
                        <div className='feed-content-post-edit-container'>
                            <PostEdit />
                        </div>
                        <div className='feed-content-storie-preview-list-container'>
                            <StoriePreviewList stories={this.props.stories} />
                        </div>
                        <div className='feed-content-post-view-list-container'>
                            <PostViewList posts={this.props.posts}/>
                        </div>
                    </div>
                </div>
                <div className='feed-content-home-right'>
                    <div className='feed-content-home-right-item'>
                        <div className='feed-content-user-infos'>
                            <img
                                src={require('../../../ressources/profil_test.png')} 
                                className='feed-content-user-infos-image'/>
                            <div className='feed-content-user-infos-names'>
                                <h4>Ben Kabongo</h4>
                                <h5>@benkabongo25</h5>
                            </div>
                        </div>
                    </div>
                    <div className='feed-content-home-right-item'>
                        <h4>Statistiques</h4>
                        <div>
                            Aucune statistiques
                        </div>
                        <input
                            className='feed-content-home-right-action-button'
                            type='button'
                            value='Afficher les statistiques' />
                    </div>
                    <div className='feed-content-home-right-item'>
                        <h4>Suggestions</h4>
                        <div className='feed-content-home-suggestion-list-container'>
                            Aucune suggestion
                        </div>
                        <input
                            className='feed-content-home-right-action-button'
                            type='button'
                            value='Voir plus de suggestion' />
                    </div>
                </div>
            </div>
        );
    }
}