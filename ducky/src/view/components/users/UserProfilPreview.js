import React from "react";

export class UserProfilPreview extends React.Component {

    render() {
        let followButtonContent = null;
        if (!this.props.me) {
            if (this.props.follow) {
                followButtonContent = (
                    <input
                        className={
                            'user-profil-preview-resume-follow-button ' +
                            'user-profil-preview-resume-button-negative'
                        }
                        type='button'
                        value='Abonné(e)' />
                );
            } else {
                followButtonContent = (
                    <input
                        className={
                            'user-profil-preview-resume-follow-button ' +
                            'user-profil-preview-resume-button-positive'
                        }
                        type='button'
                        value="S'abonner" />
                );
            }
        }

        return (
            <div className='user-profil-preview-container'>
                <div className='user-profil-preview-resume'>
                    <img 
                        className='user-profil-preview-resume-image'
                        src={this.props.user.profil_picture_src} />
                    <div className='user-profil-preview-resume-names'>
                        <span className='user-profil-preview-resume-names-names'>
                            {this.props.user.names}
                        </span>
                        <span className='user-profil-preview-resume-names-username'>
                            {this.props.user.username}
                        </span>
                    </div>
                    {followButtonContent}
                </div>
                <div className='user-profil-preview-bibliography'>
                    {this.props.user.bibliography}
                </div>
                <div className='user-profil-preview-counters'>
                    <div className='user-profil-preview-counters-item'>
                        <span className='value'>{this.props.posts.length}</span>
                        <span>Publications</span>
                    </div>
                    <div className='user-profil-preview-counters-item'>
                        <span className='value'>{this.props.user.followers.length}</span>
                        <span>Abonnés</span>
                    </div>
                    <div className='user-profil-preview-counters-item'>
                        <span className='value'>{this.props.user.followings.length}</span>
                        <span>Abonnements</span>
                    </div>
                </div>
            </div>
        );
    }
}