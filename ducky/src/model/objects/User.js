export const UserSex = {
    m: 'homme',
    w: 'femme',
    o: 'autre'
};

export class User {

    constructor(id,
                username,
                firstname, 
                lastname, 
                sex, 
                profil_picture_src,
                phone, 
                mail, 
                city,
                country,
                birthday, 
                biography,
                creation_time
                ) {

        this.id = id;
        this.username = username;
        this.firstname = firstname;
        this.lastname = lastname;
        this.names = this.firstname + ' ' + this.lastname;
        this.sex = sex;
        this.profil_picture_src = profil_picture_src;
        this.phone = phone;
        this.mail = mail;
        this.city = city;
        this.country = country;
        this.birthday = birthday;
        this.biography = biography;
        this.creation_time = creation_time;

        // Status
        this.online     = false;
        this.private    = false;
        this.deleted    = false;
        this.banished   = false;
        this.ban        = null; // specified if user is banned

        // Interactions
        this.followers  = [];
        this.followings = [];
        this.views      = [];
        this.views_by   = [];
        this.reports    = [];
        this.reports_by = [];
        this.blocks     = [];
        this.blocks_by  = [];
        this.groups     = [];

        // News
        this.messages       = [];
        this.notifications  = [];
        this.stories        = [];
        this.stories_by     = [];
        this.stories_groups = [];
        this.posts          = [];
        this.posts_by       = [];
    }

    static fromJSON(userObject) {
        let user = new User();
        for (let att in userObject) {
            user[att] = userObject[att];
            user.names = userObject.firstname + ' ' + userObject.lastname;
        }
        return user;
    }

    setBan(start, end, reason) {
        this.ban = {
            start: start,
            end: end,
            reason: reason
        };
    }
}
