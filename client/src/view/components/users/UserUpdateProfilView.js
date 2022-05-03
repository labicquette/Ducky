import React from "react";
import { User } from "../../../model/objects/User";
import { UserServices } from "../../../model/services/UserServices";

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
            biography: this.props.user.biography,
            errorMessage: '',
        };
    }

    render() {
        let errorContent = null;
        if (this.state.errorMessage) {
            errorContent = (
                <div className='user-update-profil-view-error'>
                    {this.state.errorMessage}
                </div>
            );
        }

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
                                {this.state.firstname.trim() + ' ' + this.state.lastname.trim()}
                            </div>
                            <div className='user-update-profil-view-resume-names-username'>
                                {this.state.username.trim()}
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
                            htmlFor='lastname'>
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
                                this.setState({ firstname : e.target.value });
                            }} />
                    </div>
                    <div className='user-update-profil-view-content-item'>
                        <label
                            className='user-update-profil-view-content-item-label'
                            htmlFor='lastname'>
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
                                this.setState({ lastname : e.target.value });
                            }} />
                    </div>
                    <div className='user-update-profil-view-content-item'>
                        <label
                            className='user-update-profil-view-content-item-label'
                            htmlFor='username'>
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
                                this.setState({ username : e.target.value });
                            }} />
                    </div>
                    <div className='user-update-profil-view-content-item'>
                        <label
                            className='user-update-profil-view-content-item-label'
                            htmlFor='sex'>
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
                                this.setState({ sex : e.target.value });
                            }} />
                    </div>
                    <div className='user-update-profil-view-content-item'>
                        <label
                            className='user-update-profil-view-content-item-label'
                            htmlFor='phone'>
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
                                this.setState({ phone : e.target.value });
                            }} />
                    </div>
                    <div className='user-update-profil-view-content-item'>
                        <label
                            className='user-update-profil-view-content-item-label'
                            htmlFor='mail'>
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
                                this.setState({ mail : e.target.value });
                            }} />
                    </div>
                    <div className='user-update-profil-view-content-item'>
                        <label
                            className='user-update-profil-view-content-item-label'
                            htmlFor='country'>
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
                                this.setState({ country : e.target.value });
                            }} />
                    </div>
                    <div className='user-update-profil-view-content-item'>
                        <label
                            className='user-update-profil-view-content-item-label'
                            htmlFor='city'>
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
                                this.setState({ city : e.target.value });
                            }} />
                    </div>
                    <div className='user-update-profil-view-content-item'>
                        <label
                            className='user-update-profil-view-content-item-label'
                            htmlFor='birthday'>
                            Date de naissance
                        </label>
                        <input
                            className='user-update-profil-view-content-item-text'
                            type='date'
                            value={this.state.birthday}
                            name='birthday'
                            id='birthday' 
                            onChange={(e) => {
                                e.preventDefault();
                                this.setState({ birthday : e.target.value });
                            }} />
                    </div>
                    <div className='user-update-profil-view-content-item'>
                        <label
                            className='user-update-profil-view-content-item-label'
                            htmlFor='sex'>
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
                                this.setState({ biography : e.target.value });
                            }} />
                    </div>
                </div>
                {errorContent}
                <div className='user-update-profil-view-buttons'>
                    <input
                        className='user-update-profil-view-button' 
                        type='button'
                        value='Sauvegarder'
                        onClick={() => {
                            const user = new User();
                            user.id = this.props.user.id;
                            user.profil_picture_src = this.state.profil_picture_src;
                            user.lastname = this.state.lastname.trim();
                            user.firstname = this.state.firstname.trim();
                            user.username = this.state.username.trim();
                            user.sex = this.state.sex.trim();
                            user.phone = this.state.phone.trim();
                            user.mail = this.state.mail.trim();
                            user.country = this.state.country.trim();
                            user.city = this.state.city.trim();
                            user.birthday = this.state.birthday;
                            user.biography = this.state.biography.trim();
                            UserServices.updateUser(user, 
                                (response) => {
                                    this.props.handleProfil();
                                },
                                (error) => {
                                    console.log(error);
                                }
                            );
                        }} />
                    <input
                        className='user-update-profil-view-button' 
                        type='button'
                        value='Annuler'
                        onClick={this.props.handleProfil} />
                </div>
            </div>
        );
    }
}
