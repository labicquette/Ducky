import React from "react";
import { FeedContentHome } from "./FeedContentHome";
import { FeedContentMessages } from "./FeedContentMessages";
import { FeedContentStories } from "./FeedContentStories";
import { FeedContentFriends } from "./FeedContentFriends";
import { FeedContentProfil } from "./FeedContentProfil";

import { User } from "../../../model/objects/User";
import { Post } from "../../../model/objects/Post";
import { Messages, MessagesStatus } from "../../../model/objects/Messages";
import { Stories } from "../../../model/objects/Stories";

export class FeedContent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        // Test
        let numbers = [];
        for (let i=0; i < 1000; i++) numbers.push(i);

        let users = require('../../../ressources/test_database/users.json');
        let posts = require('../../../ressources/test_database/posts.json');

        let usersList = users.map(userObject => {
            let user = User.fromJSON(userObject);
            user.followers = numbers.slice(0, 100);
            user.followings = numbers.slice(0, 75);
            return user;
        });
        let userId = 11;

        let postsList = posts.map(postObject => {
            let post = Post.fromJSON(postObject);
            post.location = postObject.city + ', ' + postObject.country;
            post.user = usersList[post.user_id];
            return post;
        });
        for (let post of postsList) {
            post.reply_to = postsList[post.reply_to_id];
        }

        let messages = new Messages(
            'abcdefghijklmnopqrstuvwxyz',
            require('../../../ressources/profil_test.png'),
            'Ben Kabongo',
            new Date('02 April 2022 13:49'),
            MessagesStatus.send
        );

        let stories = new Stories(
            'abcdefghijklmnopqrstuvwxyz',
            require('../../../ressources/profil_test.png'),
            'Ben Kabongo',
            new Date('02 April 2022 13:49'),
            false,
            false
        )

        for (let i=0; i < 10; i++)
            stories.stories.push(i);

        // 


        let content = null;
        switch(this.props.contentId) {

            case 'stories':
                content = (
                    <FeedContentStories 
                        storiesList={[stories, stories, stories, stories, stories, stories]}/>
                );
                break;

            case 'messages':
                content = (
                    <FeedContentMessages 
                        messagesList={[messages, messages, messages, messages, messages, messages,
                            messages, messages, messages, messages, messages, messages, messages, 
                            messages, messages, messages, messages, messages, messages, messages, 
                            messages, messages, messages, messages, messages, messages, messages, 
                            messages, messages, messages, messages, messages, messages, messages, 
                            messages, messages, messages, messages, messages, messages, messages, 
                            messages, messages, messages, messages, messages, messages, messages, 
                            messages, messages, messages, messages, messages, messages, messages, 
                            messages, messages, messages, messages, ]} />
                );
                break;

            case 'profil':
                let postsUser = postsList.filter(post => post.user_id == userId);
                content = (
                    <FeedContentProfil 
                        user={users[userId]}
                        posts={postsUser} />
                );
                break;

            case 'friends':
                content = (
                    <FeedContentFriends 
                        user={usersList[userId]}
                        followers={usersList.slice(0, 50)} 
                        followings={usersList.slice(50, 100)} />
                )
                break;

            case 'suggestions':
                break;

            case 'statistics':
                break;

            case 'parameters':
                break;

            default: // home
                content = (
                    <FeedContentHome 
                        user={usersList[userId]}
                        stories={[1,2,3,4,5]} 
                        posts={postsList.slice(0, 20)} />
                );
        }
        return (
            <div className='feed-content'>
                {content}
            </div>
        );
    }
}