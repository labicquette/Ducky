import React from "react";

export class UserUpdateProfilView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            profil_picture_src: this.props.user.profil_picture_src,
            lastname: this.props.user.lastname,
            firstname: this.props.user.firstname,
            username: this.props.user.username,
            sex: this.props.user.sex,
            phone: this.props.user.phone,
            mail: this.props.user.mail,
            country: this.props.user.country,
            city: this.props.user.city,
            birthday: this.props.user.birthday,
            biography: this.props.user.biography
        };
    }

    render() {
        return (
            <div className='user-update-profil-view-container'>
                <div className='user-update-profil-view-resume'>
                    <div className='user-update-profil-view-resume-picture-names'>
                        <img    
                            className='user-update-profil-view-resume-picture'
                            src={this.state.profil_picture_src}
                            alt='Profil' />
                        <div className='user-update-profil-view-resume-names'>
                            <div className='user-update-profil-view-resume-names-names'>
                                {this.state.firstname + ' ' + this.state.lastname}
                            </div>
                            <div className='user-update-profil-view-resume-names-username'>
                                {this.state.username}
                            </div>
                        </div>
                    </div>
                    <input 
                        className='user-update-profil-view-button'
                        type='button'
                        value='Modifier la photo de profil' />
                </div>
                <div className='user-update-profil-view-content'>
                    <div className='user-update-profil-view-content-item'>
                        <label
                            className='user-update-profil-view-content-item-label'
                            for='lastname'>
                            Prénom
                        </label>
                        <input
                            className='user-update-profil-view-content-item-text'
                            type='text'
                            value={this.state.firstname}
                            name='firstname'
                            id='firstname'
                            onChange={(e) => {
                                e.preventDefault();
                                this.setState({ firstname : e.target.value.trim() });
                            }} />
                    </div>
                    <div className='user-update-profil-view-content-item'>
                        <label
                            className='user-update-profil-view-content-item-label'
                            for='lastname'>
                            Nom
                        </label>
                        <input
                            className='user-update-profil-view-content-item-text'
                            type='text'
                            value={this.state.lastname}
                            name='lastname'
                            id='lastname'
                            onChange={(e) => {
                                e.preventDefault();
                                this.setState({ lastname : e.target.value.trim() });
                            }} />
                    </div>
                    <div className='user-update-profil-view-content-item'>
                        <label
                            className='user-update-profil-view-content-item-label'
                            for='username'>
                            Nom d'utilisateur
                        </label>
                        <input
                            className='user-update-profil-view-content-item-text'
                            type='text'
                            value={this.state.username}
                            name='username'
                            id='username' 
                            onChange={(e) => {
                                e.preventDefault();
                                this.setState({ username : e.target.value.trim() });
                            }} />
                    </div>
                    <div className='user-update-profil-view-content-item'>
                        <label
                            className='user-update-profil-view-content-item-label'
                            for='sex'>
                            Sexe
                        </label>
                        <input
                            className='user-update-profil-view-content-item-text'
                            type='text'
                            value={this.state.sex}
                            name='sex'
                            id='sex' 
                            onChange={(e) => {
                                e.preventDefault();
                                this.setState({ sex : e.target.value.trim() });
                            }} />
                    </div>
                    <div className='user-update-profil-view-content-item'>
                        <label
                            className='user-update-profil-view-content-item-label'
                            for='phone'>
                            Téléphone
                        </label>
                        <input
                            className='user-update-profil-view-content-item-text'
                            type='text'
                            value={this.state.phone}
                            name='phone'
                            id='phone' 
                            onChange={(e) => {
                                e.preventDefault();
                                this.setState({ phone : e.target.value.trim() });
                            }} />
                    </div>
                    <div className='user-update-profil-view-content-item'>
                        <label
                            className='user-update-profil-view-content-item-label'
                            for='mail'>
                            Adresse e-mail
                        </label>
                        <input
                            className='user-update-profil-view-content-item-text'
                            type='text'
                            value={this.state.mail}
                            name='mail'
                            id='mail' 
                            onChange={(e) => {
                                e.preventDefault();
                                this.setState({ mail : e.target.value.trim() });
                            }} />
                    </div>
                    <div className='user-update-profil-view-content-item'>
                        <label
                            className='user-update-profil-view-content-item-label'
                            for='country'>
                            Pays
                        </label>
                        <input
                            className='user-update-profil-view-content-item-text'
                            type='text'
                            value={this.state.country}
                            name='country'
                            id='country'
                            onChange={(e) => {
                                e.preventDefault();
                                this.setState({ country : e.target.value.trim() });
                            }} />
                    </div>
                    <div className='user-update-profil-view-content-item'>
                        <label
                            className='user-update-profil-view-content-item-label'
                            for='city'>
                            Ville
                        </label>
                        <input
                            className='user-update-profil-view-content-item-text'
                            type='text'
                            value={this.state.city}
                            name='city'
                            id='city' 
                            onChange={(e) => {
                                e.preventDefault();
                                this.setState({ city : e.target.value.trim() });
                            }} />
                    </div>
                    <div className='user-update-profil-view-content-item'>
                        <label
                            className='user-update-profil-view-content-item-label'
                            for='birthday'>
                            Date de naissance
                        </label>
                        <input
                            className='user-update-profil-view-content-item-text'
                            type='date'
                            value={new Date(this.state.birthday)}
                            name='birthday'
                            id='birthday' 
                            onChange={(e) => {
                                e.preventDefault();
                                this.setState({ birthday : e.target.value.trim() });
                            }} />
                    </div>
                    <div className='user-update-profil-view-content-item'>
                        <label
                            className='user-update-profil-view-content-item-label'
                            for='sex'>
                            Bio
                        </label>
                        <textarea
                            className='user-update-profil-view-content-item-text'
                            type='text'
                            value={this.state.biography}
                            name='biography'
                            id='biography'
                            onChange={(e) => {
                                e.preventDefault();
                                this.setState({ biography : e.target.value.trim() });
                            }} />
                    </div>
                </div>
                <div className='user-update-profil-view-buttons'>
                    <input
                        className='user-update-profil-view-button' 
                        type='button'
                        value='Sauvegarder' />
                    <input
                        className='user-update-profil-view-button' 
                        type='button'
                        value='Annuler' />
                </div>
            </div>
        );
    }
}