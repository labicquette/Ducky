import React from "react";
import { FeedContentHome } from "./FeedContentHome";
import { FeedContentMessages } from "./FeedContentMessages";
import { FeedContentStories } from "./FeedContentStories";
import { FeedContentFriends } from "./FeedContentFriends";
import { FeedContentProfil } from "./FeedContentProfil";

import { User } from "../../../model/objects/User";
import { Post } from "../../../model/objects/Post";
import { Message } from "../../../model/objects/Message";
import { Messages, MessagesStatus, MessageType } from "../../../model/objects/Messages";
import { Stories } from "../../../model/objects/Stories";
import { FeedContentUpdateProfil } from "./FeedContentUpdateProfil";

export class FeedContent extends React.Component {

    render() {
        // Test
        let numbers = [];
        for (let i=0; i < 1000; i++) numbers.push(i);

        let users = require('../../../ressources/test_database/users.json');
        let posts = require('../../../ressources/test_database/posts.json');
        let messages = require('../../../ressources/test_database/messages.json');

        let usersList = users.map(userObject => {
            let user = User.fromJSON(userObject);
            user.followers = numbers.slice(0, 100);
            user.followings = numbers.slice(0, 75);
            return user;
        });

        let postsList = posts.map(postObject => {
            let post = Post.fromJSON(postObject);
            post.location = postObject.city + ', ' + postObject.country;
            post.user = usersList[post.user_id];
            return post;
        });
        for (let post of postsList) {
            post.reply_to = postsList[post.reply_to_id];

            let replies_id = [];
            for (let other of postsList) {
                if (other.reply_to_id === post.id) 
                    replies_id.push(other.id);
            }

            for (let id of replies_id)
                post.replies.push(postsList[id]);
        }

        let messagesDict = {};
        for (let message of messages) {
            if (!messagesDict[message.user_id])
                messagesDict[message.user_id] = [];
            messagesDict[message.user_id].push(message.id);
        }
        let messagesList = [];
        for (let otherUserId in messagesDict) {
            let messagesIds = messagesDict[otherUserId];
            let otherUser = usersList[otherUserId];

            let messages_ = new Messages(
                otherUserId,
                usersList[otherUserId].profil_picture_src,
                MessageType.simple,
                usersList[otherUserId].names,
                new Date(),
                MessagesStatus.received
            );

            for (let messageId of messagesIds) {
                try {
                let message = new Message(
                    messageId, 
                    (messageId % 2 !== 0) ? otherUserId : this.props.user.id,
                    messages[messageId].reply_to_id,
                    new Date(messages[messageId].time),
                    messages[messageId].text
                );
                message.user = (messageId % 2 !== 0) ? otherUser : this.props.user;
                message.reply_to = new Message(
                    message.reply_to_id,
                    (messageId % 2 === 0) ? otherUserId : this.props.user.id,
                    0,
                    new Date(messages[message.reply_to_id].time),
                    messages[message.reply_to_id].text
                );
                message.reply_to.user = (messageId % 2 === 0) ? otherUser : this.props.user;

                messages_.messages.push(message);
                } catch (except) {
                    
                }
            }

            messagesList.push(messages_);
        }

        for (let messages_ of messagesList) {
            messages_.messages.sort((m1, m2) => new Date(m1.time) - new Date(m2.time));
            messages_.time = messages_.messages[messages_.messages.length-1].time;
        }
        messagesList.sort((m1, m2) => new Date(m2.time) - new Date(m1.time));

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
                        user={this.props.user}
                        messagesList={messagesList}
                        handleSetOtherUser={this.props.handleSetOtherUser} />
                );
                break;

            case 'profil':
                let postsUser = postsList.filter(post => post.user_id === this.props.user.id);
                content = (
                    <FeedContentProfil 
                        user={this.props.user}
                        me={true}
                        posts={postsUser}
                        handleUpdateProfil={this.props.handleUpdateProfil} />
                );
                break;

            case 'other-profil':
                content = (
                    <FeedContentProfil 
                        user={this.props.user}
                        me={true}
                        posts={postsUser}
                        handleUpdateProfil={this.props.handleUpdateProfil}
                        handleFriends={this.props.handleFriends} />
                );
                break;

            case 'profil-update':
                content = (
                    <FeedContentUpdateProfil
                        user={this.props.user}
                        handleProfil={this.props.handleProfil}
                        handleLogOut={this.props.handleLogOut} />
                );
                break;

            case 'friends':
                content = (
                    <FeedContentFriends 
                        user={this.props.user}
                        followers={usersList.slice(0, 50)} 
                        followings={usersList.slice(50, 100)} />
                );
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
                        user={this.props.user}
                        stories={[1,2,3,4,5]} 
                        posts={postsList.slice(0, 20)}
                        handleProfil={this.props.handleProfil} />
                );
        }
        return (
            <div className='feed-content'>
                {content}
            </div>
        );
    }
}