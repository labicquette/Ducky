/**
 * Technologies Web - LU3IN017
 * Sorbonne Université
 * 
 * @author: Ben Kabongo & Théo Charlot
 * Février 2022
 * 
 * Model de l'application
 */


/**
 * Utilisateur
 */
export class User {
    /**
     * @param id: identifiant de l'utilisateur dans la base de données
     * @param username: nom d'utilisateur
     * @param firstname: prénom
     * @param lastname: nom
     * @param password: mot de passe
     */
    constructor(id, username, firstname, lastname, password) {
        this.id = id;
        this.username = username;
        this.firstname = firstname;
        this.lastname = lastname;
        this.password = password;

        // source de la photo de profil
        this.profilPictureSrc = "";
    }
} 


