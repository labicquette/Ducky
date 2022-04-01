export const AccountStatus = {
    public: 'public',
    private: 'private',
    banished: 'banished',
    deleted: 'deleted'
};

export const OnlineStatus = {
    online: 'online',
    offline: 'offline'
};

export const UserSex = {
    m: 'Homme',
    f: 'Femme',
    o: 'Autre'
};

export class User {

    constructor(id,
                username,
                firstname, 
                lastname, 
                sex, 
                phone, 
                mail, 
                city,
                country,
                birthday, 
                biography,
                profilePicture,
                accountCreationDate,
                accountStatus, 
                onlineStatus
                ) {

        this.id = id;
        this.username = username;
        this.firstname = firstname;
        this.lastname = lastname;
        this.names = this.firstname + ' ' + this.lastname;
        this.sex = sex;
        this.phone = phone;
        this.mail = mail;
        this.city = city;
        this.country = country;
        this.birthday = birthday;
        this.biography = biography;
        this.profilePicture = profilePicture;
        this.accountCreationDate = accountCreationDate;

        // User Status
        this.accountStatus = accountStatus;
        this.banInformations = null; // specified if user is banned
        this.onlineStatus = onlineStatus;

        // User interactions
        this.followers = [];
        this.following = [];
        this.blocks    = [];
        this.views     = [];
        this.reports   = [];
        this.groups    = [];
    }

    get followersCount() {
        return this.followers.length;
    }

    get followingCount() {
        return this.following.length;
    }

    get viewsCount() {
        return this.views.length;
    }

    get reportsCount() {
        return this.reports.length;
    }

    addFollower(userFollow) {
        this.followers.push(userFollow);
    }

    addFollowing(userFollow) {
        this.following.push(userFollow);
    }

    addBlock(userBlock) {
        this.blocks.push(userBlock);
    }

    addView(userView) {
        this.views.push(userView);
    }

    addReport(userReport) {
        this.reports.push(userReport);
    }    

    setBanInformations(userBan) {
        this.banInformations = userBan;
    }
}
