export const UserSex = {
    m: 'Homme',
    w: 'Femme',
    o: 'Autre'
};

export class User {

    constructor(id,
                username,
                password,
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
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
        this.names = this.firstname + ' ' + this.lastname;
        this.sex = sex;
        this.profil_picture_src = profil_picture_src;
        if (!profil_picture_src)
            this.profil_picture_src = "http://dummyimage.com/190x100.png/ff4444/ffffff";
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
        }
        if (userObject._id) user.id = userObject._id;
        user.names = userObject.firstname + ' ' + userObject.lastname;
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
